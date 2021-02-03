import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getCodes(){
    return this.httpClient.get(`https://uat.trc.eku.edu/budgetcodeexam/api/all`);
  }
  constructor(private httpClient: HttpClient) { }
}
