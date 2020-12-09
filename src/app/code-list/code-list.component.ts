import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BudgetCode } from "./../budget-code.model";
import { CodeService } from "./../code.service";

@Component({
  selector: "app-code-list",
  templateUrl: "./code-list.component.html",
  styleUrls: ["./code-list.component.css"],
})
export class CodeListComponent implements OnInit {
  codes: BudgetCode[];

  constructor(private codeService: CodeService) {}

  ngOnInit() {
    this.codeService.fetchCodes();
    this.codes = this.codeService.getCodes();
  }
}
