import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IBudgetCode } from '../budget-code/budget-code.model';

import { GetBudgetCodeService } from '../shared/budgetCodeGet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-code-form',
  templateUrl: './budget-code-form.component.html',
  styleUrls: ['./budget-code-form.component.css']
})

export class BudgetCodeFormComponent {
budgetCode = this.fb.group({
  fiscalYear: [null, Validators.required],
  budgetCode: [null, Validators.required],
  budgetTitle: [null, Validators.required]
});

submissionError = '';
submitBudget(fiscalYear: number, budgetCode: string, budgetTitle: string): void {

  let budget: IBudgetCode = {
    budgetCodeId: 0,
    fiscalYear,
    budgetCode,
    budgetTitle
  };
  this.budgetService.postBudgetCode(budget).subscribe(
    budgetCodePost => budgetCodePost.data.budgetCodeId ?
    this.navToBudget(budgetCodePost.data.budgetCodeId) : this.submissonErrorHandler(budgetCodePost));
}

    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
  constructor(private fb: FormBuilder,  private budgetService: GetBudgetCodeService, private router: Router) {}
  onSubmit() {
     if (this.budgetCode.valid) {
    this.submitBudget(this.budgetCode.value.fiscalYear, this.budgetCode.value.budgetCode, this.budgetCode.value.budgetTitle);
     }
  }

  submissonErrorHandler(resp) {
    this.submissionError = `${resp.results + ':' + (resp.message || ' Badly formatted data')}`;
  }

  navToBudget(id) {
    this.submissionError = 'Budget Successfully added!';
    console.log(id);
    this.router.navigate(['../budget', id]);
  }
}

