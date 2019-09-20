import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IBudgetCode } from '../budget-code/budget-code.model';

@Component({
  selector: 'app-budget-code-form',
  templateUrl: './budget-code-form.component.html',
  styleUrls: ['./budget-code-form.component.css']
})
export class BudgetCodeFormComponent {
budgetCode = this.fb.group({
  budgetCodeId: [null, Validators.required],
  fiscalYear: [null, Validators.required],
  budgetCode: [null, Validators.required],
  budgetTitle: [null, Validators.required]
});

    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
