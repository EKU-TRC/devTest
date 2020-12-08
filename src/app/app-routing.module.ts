/**
 *  App Routing Module
 * 
 *  Author: Kenneth Carroll
 *  Date: 12/8/2020
 *  revision: 1
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetCodeFormComponent } from './components/budget-code-form/budget-code-form.component';
import { BudgetCodesListComponent } from './components/budget-codes-list/budget-codes-list.component';

const routes: Routes = [
  {path: '', redirectTo: "list/", pathMatch: 'full'},
  {path: 'form', component: BudgetCodeFormComponent},
  {path: 'list/:filter', component: BudgetCodesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
