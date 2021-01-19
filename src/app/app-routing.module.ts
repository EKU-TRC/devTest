import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayCodesComponent } from './display-codes/display-codes.component';
import { AddCodeComponent } from './add-code/add-code.component';

const routes: Routes = [
  {path: '', redirectTo: 'display-codes', pathMatch: 'full' },
  {path: 'display-codes', component: DisplayCodesComponent},
  {path: 'add-code', component: AddCodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
