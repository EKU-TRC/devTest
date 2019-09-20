import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetCodeTableComponentComponent } from './budget-code-table-component/budget-code-table-component.component';
import { BudgetCodeComponent } from './budget-code/budget-code.component';
import { BudgetCodeFormComponent } from './budget-code-form/budget-code-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: BudgetCodeTableComponentComponent, pathMatch: 'full' },
  { path: 'budget/:id', component: BudgetCodeComponent },
  { path: 'create', component: BudgetCodeFormComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
