import { Component, OnInit } from '@angular/core';
import { BudgetCodesService } from '../budget-codes.service';

@Component({
  selector: 'app-display-codes',
  templateUrl: './display-codes.component.html',
  styleUrls: ['./display-codes.component.css']
})
export class DisplayCodesComponent implements OnInit {
  codes = [];
  constructor(private budgetService: BudgetCodesService) { }

  ngOnInit() {
    this.budgetService.testing().subscribe( response => {
      console.log(response);
      this.codes = response;
    });
  }

}
