import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
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
  filteredCodes: BudgetCode[];
  searchForm: FormGroup;
  searchCategories = ["Fiscal Year", "Budget Code", "Budget Title"];

  constructor(private codeService: CodeService) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchKey: new FormControl(null),
      searchCategory: new FormControl(this.searchCategories[0]),
    });
    this.codeService.fetchCodes();
    this.codes = this.codeService.getCodes();
  }

  filterCodes() {
    const key = this.searchForm.get("searchKey").value;
    if (!key) {
      this.codes = this.codeService.getCodes();
      return;
    }
    const catIndex = this.searchCategories.indexOf(
      this.searchForm.get("searchCategory").value
    );

    switch (catIndex) {
      case 0:
        const searchedYear = Number(key);
        if (searchedYear) {
          this.codes = this.codeService
            .getCodes()
            .filter((code) => code.fiscalYear === searchedYear);
        }
        break;
      case 1:
        this.codes = this.codeService
          .getCodes()
          .filter((code) => code.budgetCode.toLowerCase().indexOf(key.toLowerCase()) !== -1);
        break;
      case 2:
        this.codes = this.codeService
          .getCodes()
          .filter((code) => code.budgetTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1);
        break;
      default:
        this.codes = this.codeService.getCodes();
    }
  }
  filterByYear() {
    return this.codes.filter((code) => code.fiscalYear);
  }
}
