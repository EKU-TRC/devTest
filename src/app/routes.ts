import { BudgetCodeComponent } from './budget-code/budget-code.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BudgetCodeTableComponentComponent } from './budget-code-table-component/budget-code-table-component.component';
export const appRoutes = [
  { path: '', component: BudgetCodeComponent, pathMatch: 'full' },
  { path: 'table', component: BudgetCodeTableComponentComponent },
  { path: '**', component: ErrorPageComponent },
 
];
