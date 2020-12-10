import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";
import { AddCodeComponent } from "./add-code/add-code.component";
import { CodeListComponent } from "./code-list/code-list.component";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(appRoutes)],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
