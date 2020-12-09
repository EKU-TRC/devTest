import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCodeComponent } from './add-code/add-code.component';
import { CodeListComponent } from './code-list/code-list.component';

const routes: Routes = [
  { path: "", redirectTo: "view-codes", pathMatch: "full" },
  { path: "view-codes", component: CodeListComponent },
  { path: "add-code", component: AddCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
