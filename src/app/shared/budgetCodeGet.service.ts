import { Injectable } from '@angular/core';
import { IBudgetCode } from '../budget-code/budget-code.model';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';





@Injectable()
export class GetBudgetCodeService {
  constructor(private http: HttpClient ) {
    /*http*/
  }
  private getSingleUrl = 'https://uat.trc.eku.edu/budgetcodeexam/api/id/'; // + id;
  private getAllUrl = 'https://uat.trc.eku.edu/budgetcodeexam/api/all';
  private postUrl = 'https://uat.trc.eku.edu/budgetcodeexam/api/add';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getBudgetCode(budgetId: number): Observable<IBudgetCode[]> {
    return this.http.get<IBudgetCode[]>(this.getSingleUrl + budgetId);
  }


  getBudgetCodes(): Observable<IBudgetCode[]> {
    return this.http.get<IBudgetCode[]>(this.getAllUrl);
  }

  postBudgetCode( budget: IBudgetCode): Observable<any> {
    return this.http.post<IBudgetCode>(this.postUrl, budget, this.httpOptions);
  }

}
