/**
 * Budget Code List Component Typescript
 * 
 * author: Kenneth Carroll
 * date: 12/8/2020
 * revision: 1
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

  constructor() { }

  ngOnInit() {
  }

}
