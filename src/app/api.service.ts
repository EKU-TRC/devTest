import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://uat.trc.eku.edu/budgetcodeexam/api/add"

  postCode = {
    "BudgetCodeId": 0,
    "FiscalYear": 2025,
    "BudgetCode": "8-12346",
    "BudgetTitle": "Henry"
  }

  json;



  constructor(private httpClient: HttpClient) {

   }
   public getCodes(){
    return this.httpClient.get(`https://uat.trc.eku.edu/budgetcodeexam/api/all`);
  }

  public addCodes(added){
    return this.httpClient.post<any>(this.url, added);
  }
}



