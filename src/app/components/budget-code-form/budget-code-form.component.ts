/**
 * Budget Code Form Component Typescript
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
  selector: 'app-budget-code-form',
  templateUrl: './budget-code-form.component.html',
  styleUrls: ['./budget-code-form.component.css']
})
export class BudgetCodeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
