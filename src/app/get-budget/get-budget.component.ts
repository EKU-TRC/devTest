import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { BudgetService } from '../service/api/budget.service';
import { Budget } from '../service/model/Budget';



@Component({
  selector: 'app-get-budget',
  templateUrl: './get-budget.component.html',
  styleUrls: ['./get-budget.component.css']
})

export class GetBudgetComponent implements OnInit {
  budget: any;
  data: any;
  constructor(private getAllBudgetService: BudgetService) { }
  displayedColumns: string[] = ['budgetCodeId', 'fiscalYear', 'budgetCode', 'budgetTitle'];

  ngOnInit() {
    this.budget = this.getAllBudgetService.getAllBudget();
    this.budget.subscribe(d => {
      console.log(JSON.stringify(d));
      this.data = d.data;
    });
  }

}
