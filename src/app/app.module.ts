import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { LayoutModule } from "@angular/cdk/layout";
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
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";
import { AddCodeComponent } from "./add-code/add-code.component";
import { CodeListComponent } from "./code-list/code-list.component";
import { CodeItemComponent } from "./code-list/code-item/code-item.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "view-codes", pathMatch: "full" },
  { path: "view-codes", component: CodeListComponent },
  { path: "add-code", component: AddCodeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCodeComponent,
    CodeListComponent,
    CodeItemComponent,
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
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatBottomSheetModule,
    HttpClientModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(appRoutes)],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
