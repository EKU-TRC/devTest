import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: BudgetComponent },
  { path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
