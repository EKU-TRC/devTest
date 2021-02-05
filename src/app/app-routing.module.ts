import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetcodesComponent } from './budgetcodes/budgetcodes.component';
import { AddcodesComponent } from './addcodes/addcodes.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'budget-codes', component: BudgetcodesComponent },
  { path: 'add-codes', component: AddcodesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
