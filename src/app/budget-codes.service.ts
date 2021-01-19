import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetCodesService {

  private API_URL = 'https://uat.trc.eku.edu/budgetcodeexam/api/';

  constructor(private httpclient: HttpClient) { }

  public singleCode(): any {
    return this.httpclient.get(this.API_URL + 'id/1');
  }
  public allCodes(): any {
    return this.httpclient.get(this.API_URL + 'all');
  }
  public specificYear(): any {
    return this.httpclient.get(this.API_URL + 'year/2018');
  }
  public specificCode(): any {
    return this.httpclient.get(this.API_URL + 'code/8-00001');
  }
  public addCode(budgetCode) {
    console.log(budgetCode);
    return this.httpclient.post(this.API_URL + 'add', budgetCode);
  }
}
