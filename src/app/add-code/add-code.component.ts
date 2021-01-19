import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BudgetCodesService } from '../budget-codes.service';

@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.css']
})
export class AddCodeComponent implements OnInit {

  budgetCode = {
    budgetCodeId: '',
    budgetCode: '',
    budgetTitle: '',
    fiscalYear: ''
  };

  constructor(
    private budgetService: BudgetCodesService,
    private formModel: FormsModule,
    ) { }

  ngOnInit() {
  }

  addCode(response): void {
    console.log(response);
    this.budgetCode.budgetCodeId = response.form.controls.budgetCodeId.value;
    this.budgetCode.budgetCode = response.form.controls.budgetCode.value;
    this.budgetCode.budgetTitle = response.form.controls.budgetTitle.value;
    this.budgetCode.fiscalYear = response.form.controls.fiscalYear.value;
    console.log(this.budgetCode);
    // this.budgetService.addCode(this.data);
  }
}
