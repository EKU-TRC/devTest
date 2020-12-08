/**
 * Budget Code Form Component Typescript
 * 
 * author: Kenneth Carroll
 * date: 12/8/2020
 * revision: 2
 */

// angular imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// local imports
import { BudgetCode } from '../../shared/models/budget-code.model';
import { BudgetCodesService } from '../../shared/services/budget-codes.service';

@Component({
  selector: 'app-budget-code-form',
  templateUrl: './budget-code-form.component.html',
  styleUrls: ['./budget-code-form.component.css']
})
export class BudgetCodeFormComponent implements OnInit {

  // public budget code for handling the input from the form
  budgetCode: BudgetCode = new BudgetCode(null, null, null, null);

  // add the budget code service upon construction
  constructor(private budgetCodeService: BudgetCodesService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    // dummy submission to be replaced with the service call
    this.budgetCodeService.postNewBudgetCode(this.budgetCode);
    this.router.navigate(['/']);
  }

}
