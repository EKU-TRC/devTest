/**
 * Budget Code List Component Typescript
 * 
 * author: Kenneth Carroll
 * date: 12/9/2020
 * revision: 4
 */

// angular imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs imports
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

// local imports
import { BudgetCode } from '../../shared/models/budget-code.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetCodesService {

  //private array of budget codes
  private budgetCodes: BudgetCode[] = [];

  //private array of distinct years
  private distinctYears: string[] = [];

  //private array of last filtered year's budget codes
  private yearBudgetCodes: BudgetCode[] = [];

  //subject for subscribers
  private budgetCodesUpdated = new Subject<{
    codes: BudgetCode[], 
    count: number,
    message: string,
    status: string
  }>();
  private distinctYearsUpdated = new Subject<{distinctYears: string[]}>();
  private formSubmissionStatus = new Subject<{status: string, message: string}>();

  // create an http client on construction
  constructor(private http: HttpClient) { }

  /**
   * function to pull all budget codes from the api
   */
  getAllBudgetCodes() {
    // make http request, data separated for readability, api url read from environment
    this.http.get<{
        results: string, 
        message: string, 
        data: {
          budgetCodeId: number, 
          fiscalYear: number, 
          budgetCode: string, 
          budgetTitle: string}[]
        }>(environment.budgetCodeApi + 'all')

      // pipe the results
      .pipe(map((codeData) => {
        
        // check for successful data return
        if(codeData.results === "Success"){

          // transform objects into BudgetCode instances
          let codes = codeData.data.map(code => {
            return new BudgetCode(
              code.budgetCodeId,
              code.fiscalYear,
              code.budgetCode,
              code.budgetTitle
            );
          });
          // map to the data model
          return {codes: codes, message: codeData.message, status: codeData.results}

          // api did not return a success
        } else {

          // return safe data values
          return {
            // empty array to prevent iteration errors
            codes: [], 
            // user readable message, more descriptive than "not found"
            message: "Unable to retrieve budget codes at this time", 
            // provide status to necessary components
            status: codeData.results}
        }
        
  
      })).subscribe((transformedData)=> {
        // uncomment to quickly testing error handling
        //transformedData = {codes:[], message: "Unable to retrieve budget codes at this time", status: "Failed"}
        
        // set budget codes internal
        this.budgetCodes = transformedData.codes;

        // set distinct years
        this.distinctYears = this.getAllBudgetYears(transformedData.codes);

        // send any errors to the console
        if(transformedData.status !== "Success") {
          console.error(transformedData.message);
        }

        // emmit copied information over the listener
        this.budgetCodesUpdated.next({
          codes: [...this.budgetCodes], 
          count: transformedData.codes.length,
          message: transformedData.message,
          status: transformedData.status
        })

        //emmit distinct years for year filtering
        this.distinctYearsUpdated.next({distinctYears: [...this.distinctYears]});
      })
  }

  /**
   * 
   * @param year 
   * Method to accept a year, query api for that year,
   * and update listenting components to only have data
   * for that given year
   */
  getBudgetCodeByYear(year: string) {

    // check for YYYY notation using regular expression
    if(!year.match(/^\d{4}$/)){

      // if it is not a year notation, retrieve all years
      this.getAllBudgetCodes();

      // prevent API call below
      return;
    }

    //make api request for specific year's budget
    this.http.get<{
      results: string, 
      message: string, 
      data: {
        budgetCodeId: number, 
        fiscalYear: number, 
        budgetCode: string, 
        budgetTitle: string}[]
      }>(environment.budgetCodeApi + 'year/' + year)
    // pipe the data
    .pipe(map(codeData=> {

      // check for data success
      if(codeData.results === "Success") {
        
        //map codes to actual BudgetCode Objects
        let codes = codeData.data.map(code=> {
          return new BudgetCode(
            code.budgetCodeId,
            code.fiscalYear,
            code.budgetCode,
            code.budgetTitle
          );
        })

        // return successful data
        return {codes: codes, message: codeData.message, status: codeData.results}

        // the api did not return a successful query
      } else {

        // return proper error message and safe data
        return {
          // returns and empty code array to keep iteration
          codes: [], 
          //converts message to something more understandable to the user
          message: "Unable to find any Budget Codes for that given year", 
          status: codeData.results}
      }
      // subscripe to the transformed data
    })).subscribe(transformedData => {

      // update the internal store
      this.yearBudgetCodes = transformedData.codes;

      // send any errors to the console
      if(transformedData.status !== "Success") {
        console.error(transformedData.message);
      }

      // emit to componet
      this.budgetCodesUpdated.next({
        codes: [...this.yearBudgetCodes], 
        count: transformedData.codes.length, 
        message: transformedData.message,
        status: transformedData.status
      });
    })
  }

  // returns all budget years from the database pull
  private getAllBudgetYears(codes: BudgetCode[]): string[] {
    const distinctYears = [...new Set([...codes].map((code) => code.fiscalYear.toString()))];
    return distinctYears;
  }

  /**
   * function to post a new budget code to the api
   */

  postNewBudgetCode(newCode: BudgetCode) {
    
    // id field is initially null, this assigns an available value
    newCode.budgetCodeId = this.validIdFromArray();

    // save new budget code in payload format
    const payload = newCode.toPayloadFormat();
    
    // make the request to the api
    this.http.post<{
      results: string, 
      message: string, 
      data: {
        budgetCodeId: number, 
        fiscalYear: number, 
        budgetCode: string, 
        budgetTitle: string
      }[]
      // use the api url, send payload over body
    }>(environment.budgetCodeApi + 'add', payload)
    .subscribe((response) => {

      // console error any issues
      if(response.results !== "Success") {
        console.error(response.message);
      }

      // return the status to the form
      this.formSubmissionStatus.next({status: response.results, message: response.message});
    })
  }
  // allows access to the private code[] subject
  getBudgetCodesUpdatedListener() {
    return this.budgetCodesUpdated.asObservable();
  }

  // get access to the private year[] subject
  getDistinctYearsListener() {
    return this.distinctYearsUpdated.asObservable();
  }

  // get form status listener
  getFormStatusListenter() {
    return this.formSubmissionStatus.asObservable();
  }

  /**
   * function to get the next valid id 
   */
  private validIdFromArray(): number {
    // finds the highest ID value in local store and increments by 1
    return Math.max(...this.budgetCodes.map((code) => {return code.budgetCodeId;}), 0) + 1;
  }
}
