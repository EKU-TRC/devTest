/**
 * Budget Code List Component Typescript
 * 
 * author: Kenneth Carroll
 * date: 12/8/2020
 * revision: 3
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

  //subject for subscribers
  private budgetCodesUpdated = new Subject<{codes: BudgetCode[], count: number}>();
  private distinctYearsUpdated = new Subject<{distinctYears: string[]}>();

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

        // map to the data model
        return codeData.data.map(code => {
          return new BudgetCode(
            code.budgetCodeId,
            code.fiscalYear,
            code.budgetCode,
            code.budgetTitle
          );
        })
      })).subscribe((codes)=> {
        // set budget codes internal
        this.budgetCodes = codes;

        // set distinct years
        this.distinctYears = this.getAllBudgetYears(codes);

        // emmit copied information over the listener
        this.budgetCodesUpdated.next({codes: [...this.budgetCodes], count: codes.length})
        this.distinctYearsUpdated.next({distinctYears: [...this.distinctYears]});
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

      // log response from the api
      console.log(response);
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

  /**
   * function to get the next valid id 
   */
  private validIdFromArray(): number {
    // finds the highest ID value and increments by 1
    return Math.max(...this.budgetCodes.map((code) => {return code.budgetCodeId;}), 0) + 1;
  }
}
