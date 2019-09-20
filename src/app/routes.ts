import { BudgetCodeComponent } from './budget-code/budget-code.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BudgetCodeTableComponentComponent } from './budget-code-table-component/budget-code-table-component.component';
import { BudgetCodeFormComponent } from './budget-code-form/budget-code-form.component';
export const appRoutes = [
  { path: '', component: BudgetCodeTableComponentComponent, pathMatch: 'full' },
  { path: 'budget/:id', component: BudgetCodeComponent },
  { path: 'create', component: BudgetCodeFormComponent },
  { path: '**', component: ErrorPageComponent },

];
