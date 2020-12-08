import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgets: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBudgets().subscribe(data => {
      this.budgets = data.data;
      console.log(this.budgets)
    });
  }

}
