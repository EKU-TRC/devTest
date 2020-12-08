/**
 * Budget Code List Component Typescript
 * 
 * author: Kenneth Carroll
 * date: 12/8/2020
 * revision: 2
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
  private budgetCodes: BudgetCode[] = []

  //subject for subscribers
  private budgetCodesUpdated = new Subject<{codes: BudgetCode[], count: number}>();

  // create an http client on construction
  constructor(private http: HttpClient) { }

  /**
   * functoin to pull all budget codes from hte api
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

        // emmit copied information over the listener
        this.budgetCodesUpdated.next({codes: [...this.budgetCodes], count: codes.length})
      })
  }

  // allows access to the private subject
  getBudgetCodesUpdatedListener() {
    return this.budgetCodesUpdated.asObservable();
  }
}
