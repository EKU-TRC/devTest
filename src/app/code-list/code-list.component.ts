import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { BudgetCode } from "./../budget-code.model";
import { CodeService } from "./../code.service";
import { SEARCH_CATEGORIES, SORT_CATEGORIES } from '../constants';

@Component({
  selector: "app-code-list",
  templateUrl: "./code-list.component.html",
  styleUrls: ["./code-list.component.css"],
})
export class CodeListComponent implements OnInit {
  searchForm: FormGroup;
  sortForm: FormGroup;
  codes: BudgetCode[] = [];
  searchCategories = SEARCH_CATEGORIES;
  sortCategories = SORT_CATEGORIES;

  constructor(private codeService: CodeService) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchKey: new FormControl(null),
      searchCategory: new FormControl(null),
    });

    this.sortForm = new FormGroup({
      sortCategory: new FormControl(null)
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
      case 0: // search by Fiscal Year
        const searchedYear = Number(key);
        if (searchedYear) {
          this.codes = this.codeService
            .getCodes()
            .filter((code) => code.fiscalYear === searchedYear);
        }
        break;
      case 1: // Search by Budget Code
        this.codes = this.codeService
          .getCodes()
          .filter((code) => code.budgetCode.toLowerCase().indexOf(key.toLowerCase()) !== -1);
        break;
      case 2: // Search by Budget Title
        this.codes = this.codeService
          .getCodes()
          .filter((code) => code.budgetTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1);
        break;
      default:
        this.codes = this.codeService.getCodes();
    }
  }

  onSortCodes() {
    const selSort = this.sortForm.get("sortCategory").value;
    console.log(selSort);
    const selSortIndex = this.sortCategories.indexOf(selSort);
    switch (selSortIndex) {
      case 0: //sort by Fiscal Year in ascending order
        this.codes.sort((a, b) => (a.fiscalYear > b.fiscalYear) ? 1 : -1);
        break;
      case 1: //sort by Fiscal Year in descending order
        this.codes.sort((a, b) => (a.fiscalYear < b.fiscalYear) ? 1 : -1);
        break;
      case 2: //sort by Budget Code in ascending order
        this.codes.sort((a, b) => (a.budgetCode > b.budgetCode) ? 1 : -1);
        break;
      case 3: //sort by Budget Code in descending order
        this.codes.sort((a, b) => (a.budgetCode < b.budgetCode) ? 1 : -1);
        break;

      case 4: //sort by Budget Title in ascending order
        this.codes.sort((a, b) => (a.budgetTitle > b.budgetTitle) ? 1 : -1);
        break;

      case 2: //sort by Budget Title in descending order
        this.codes.sort((a, b) => (a.budgetTitle > b.budgetTitle) ? 1 : -1);
        break;
      default:
        break;
    }
  }
}
