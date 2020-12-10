import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetBudgetComponent } from './get-budget/get-budget.component';
import { PostBudgetComponent } from './post-budget/post-budget.component';

const routes: Routes = [
  {
    path: 'get-budget',
    component: GetBudgetComponent
  },
  {
    path: 'post-budget',
    component: PostBudgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
