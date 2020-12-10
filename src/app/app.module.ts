/**
 * App Module TS
 * 
 * author: Kenneth Carroll
 * date: 12/9/2020
 * revision 3
 */

// angular imports
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { 
  MatSortModule, 
  MatInputModule, 
  MatDialogModule, 
  MatTabsModule, 
  MatExpansionModule, 
  MatDividerModule, 
  MatStepperModule, 
  MatRadioModule, 
  MatTreeModule, 
  MatBottomSheetModule, 
  MatProgressBarModule, 
  MatSelectModule, 
  MatTableModule } from '@angular/material';

// local modules
import { AppRoutingModule } from './app-routing.module';

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
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatStepperModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatBottomSheetModule,
    HttpClientModule, 
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
