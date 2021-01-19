import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayCodesComponent } from './display-codes/display-codes.component';
import { AddCodeComponent } from './add-code/add-code.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
