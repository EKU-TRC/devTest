/**
 *  Budget Code List Component Typescript
 * 
 *  author: Kenneth Carroll
 *  date: 12/8/2020
 *  revision: 2
 */

// angular imports
import { Component, OnInit } from '@angular/core';

// local imports
import { BudgetCode } from '../../shared/models/budget-code.model';

@Component({
  selector: 'app-budget-codes-list',
  templateUrl: './budget-codes-list.component.html',
  styleUrls: ['./budget-codes-list.component.css']
})
export class BudgetCodesListComponent implements OnInit {

  // internal array of budget codes for template access
  budgetCodes: BudgetCode[];
  constructor() { }

  ngOnInit() {
    // intiialize the array
    this.budgetCodes = [];

    // push dummy values for working in template <-- will be replaced with service
    this.budgetCodes.push(new BudgetCode(1, 2020, "5-00001", "Test Budget Item"))
    this.budgetCodes.push(new BudgetCode(1, 2020, "5-00001", "Test Budget Item"))
  }

}
