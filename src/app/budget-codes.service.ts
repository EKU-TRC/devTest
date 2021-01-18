import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetCodesService {

  private API_URL = 'https://uat.trc.eku.edu/budgetcodeexam/api/';

  constructor(private httpclient: HttpClient) { }

  public testing(): any {
    return this.httpclient.get(this.API_URL + 'id/1');
  }
}
