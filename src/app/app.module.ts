/**
 * App Module TS
 * 
 * author: Kenneth Carroll
 * date: 12/9/2020
 * revision 4
 */

// angular imports
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// local modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/modules/material/material.module';

// local components
import { AppComponent } from './app.component';
import { BudgetCodesListComponent } from './components/budget-codes-list/budget-codes-list.component';
import { BudgetCodeFormComponent } from './components/budget-code-form/budget-code-form.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetCodesListComponent,
    BudgetCodeFormComponent,
    NavigationHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
