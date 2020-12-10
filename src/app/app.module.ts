import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatSortModule, MatInputModule, MatDialog,
  MatDialogModule, MatTabsModule, MatExpansionModule, MatDividerModule, MatStepperModule, MatRadioModule,
  MatTreeModule, MatBottomSheet, MatBottomSheetModule, MatProgressBarModule,
  MatSelectModule, MatTableModule, MatListModule
} from '@angular/material';
import { FormsModule, NgControl } from '@angular/forms';
import { GetBudgetComponent } from './get-budget/get-budget.component';
import { BudgetService } from './service/api/budget.service';
import { HttpClientModule } from '@angular/common/http';
import { PostBudgetComponent } from './post-budget/post-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    GetBudgetComponent,
    PostBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatListModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatStepperModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatBottomSheetModule,
    HttpClientModule

  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
