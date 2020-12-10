import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from '../model/Budget';

@Injectable()
export class BudgetService {
  constructor(private http: HttpClient) { }

  public getAllBudget() {
    return this.http.get<Budget>('https://uat.trc.eku.edu/budgetcodeexam/api/all');
  }

  public postBudegt() {

  }
}
