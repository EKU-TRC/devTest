import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBudgets() {
    return this.http.get('https://uat.trc.eku.edu/budgetcodeexam/api/all')
  }

  addBudget(createBudget) {
    return this.http.post('https://uat.trc.eku.edu/budgetcodeexam/api/add', createBudget)
  }
}
