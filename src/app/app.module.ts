import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatSortModule,
  MatInputModule,
  MatDialog,
  MatDialogModule,
  MatTabsModule,
  MatExpansionModule,
  MatDividerModule,
  MatStepperModule,
  MatRadioModule,
  MatTreeModule,
  MatBottomSheet,
  MatBottomSheetModule,
  MatProgressBarModule,
  MatSelectModule,
  MatTableModule,
  MatCardModule,
  MatMenuModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetCodeComponent } from './budget-code/budget-code.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {appRoutes} from './routes';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import {GetBudgetCodeService} from './shared/budgetCodeGetService';
import { BudgetCodeTableComponentComponent } from './budget-code-table-component/budget-code-table-component.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BudgetCodeFormComponent } from './budget-code-form/budget-code-form.component';
@NgModule({
  declarations: [AppComponent, BudgetCodeComponent, NavBarComponent, ErrorPageComponent, BudgetCodeTableComponentComponent, BudgetCodeFormComponent],
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
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatBottomSheetModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [GetBudgetCodeService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
