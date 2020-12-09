/**
 * Budget Code Form Component Typescript
 * 
 * author: Kenneth Carroll
 * date: 12/9/2020
 * revision: 3
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

  // create a subscription to verify form submission
  formStatusSub: Subscription;

  // add the budget code service upon construction
  constructor(private budgetCodeService: BudgetCodesService, private router: Router) { }

  ngOnInit() {
    // initialize form sttaus subscription
    this.formStatusSub = this.budgetCodeService.getFormStatusListenter()
    .subscribe((result: {status: string, message: string}) => {

      // if the submission is a success
      if(result.status === "Success") {

        // alert user and return to original list
        alert("The budget code was successfully addeds!");
        this.router.navigate(['/']);

        // submission failed
      } else {

        // alert but remain on form to allow resubmission
        alert("The budget code was not added! Please verify that the code does not already exist.");
      }
    })
  }

  onSubmit() {

    // submit the budget code object from the form
    this.budgetCodeService.postNewBudgetCode(this.budgetCode);

  }
  ngOnDestroy() {
    // remove subscription on destroy
    this.formStatusSub.unsubscribe();
  }

}
