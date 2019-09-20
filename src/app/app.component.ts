import { Component } from '@angular/core';
import {IBudgetCode} from './budget-code/budget-code.model';
import {NavBarComponent} from './nav-bar/nav-bar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Budget Codes';

  budgetCode1: IBudgetCode =  {
        BudgetCodeId: 12,
        FiscalYear: 2019,
        BudgetCode: '8-0001',
        BudgetTitle: 'FY 2019 Budget'
    }
}
