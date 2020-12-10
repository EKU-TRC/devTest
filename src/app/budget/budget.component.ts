import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Budget, BudgetResponse } from './budget.interface';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgets: Budget[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getBudgets().subscribe((response: BudgetResponse) => {
      this.budgets = response.data;
      console.log(this.budgets);
    });
  }
}
