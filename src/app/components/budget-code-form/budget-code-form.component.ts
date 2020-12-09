/**
 * Budget Code Form Component Typescript
 * 
 * author: Kenneth Carroll
 * date: 12/8/2020
 * revision: 2
 */

// angular imports
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// local imports
import { BudgetCode } from '../../shared/models/budget-code.model';
import { BudgetCodesService } from '../../shared/services/budget-codes.service';

@Component({
  selector: 'app-budget-code-form',
  templateUrl: './budget-code-form.component.html',
  styleUrls: ['./budget-code-form.component.css']
})
export class BudgetCodeFormComponent implements OnInit, OnDestroy {

  // public budget code for handling the input from the form
  budgetCode: BudgetCode = new BudgetCode(null, null, null, null);
  formStatusSub: Subscription;

  // add the budget code service upon construction
  constructor(private budgetCodeService: BudgetCodesService, private router: Router) { }

  ngOnInit() {
    this.formStatusSub = this.budgetCodeService.getFormStatusListenter()
    .subscribe((result: {status: string, message: string}) => {
      if(result.status === "Success") {
        alert("The budget code was successfully addeds!");
        this.router.navigate(['/']);
      } else {
        alert("The budget code was not added! Please verify that the code does not already exist.");
      }
    })
  }

  onSubmit() {

    // submit the nudget code object from the form
    this.budgetCodeService.postNewBudgetCode(this.budgetCode);

  }
  ngOnDestroy() {
    this.formStatusSub.unsubscribe();
  }

}
