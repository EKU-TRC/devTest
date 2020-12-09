import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  results = null
  constructor(public http: HttpService) { }

  onSubmit(form) {
    const newBudgetData = {
      BudgeCodeId: form.value.BudgetCodeId,
      FiscalYear: form.value.FiscalYear,
      BudgetCode: form.value.BudgetCode,
      BudgetTitle: form.value.BudgetTitle
    }
    this.http.addBudget(newBudgetData).subscribe(data => {
      data['results'] === "Success" ? this.results = true : this.results = false;
    })
  }
}
