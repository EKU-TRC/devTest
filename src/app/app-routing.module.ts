/**
 *  App Routing Module
 * 
 *  Author: Kenneth Carroll
 *  Date: 12/8/2020
 *  revision: 2
 */

// angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component imports
import { BudgetCodeFormComponent } from './components/budget-code-form/budget-code-form.component';
import { BudgetCodesListComponent } from './components/budget-codes-list/budget-codes-list.component';

const routes: Routes = [

  // initial render should show the full list
  {path: '', redirectTo: "list/", pathMatch: 'full'},
  // render the form
  {path: 'form', component: BudgetCodeFormComponent},
  // render a filtered list
  {path: 'list/:filter', component: BudgetCodesListComponent},
  // allows redirect to list
  {path: 'list', component: BudgetCodesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
