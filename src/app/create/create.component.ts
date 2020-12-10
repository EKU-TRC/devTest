import { Component } from '@angular/core';
import { NewBudget } from './create.interface';
import { HttpService } from '../http.service';
import { Budget } from '../budget/budget.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  results: boolean;
  constructor(public http: HttpService) { }

  onSubmit(form) {
    const newBudgetData: NewBudget = {
      BudgeCodeId: form.value.BudgetCodeId,
      FiscalYear: form.value.FiscalYear,
      BudgetCode: form.value.BudgetCode,
      BudgetTitle: form.value.BudgetTitle
    };
    this.http.addBudget(newBudgetData).subscribe(({results}: {results: string}) => {
      results === 'Success' ? this.results = true : this.results = false;
    });
  }
}
