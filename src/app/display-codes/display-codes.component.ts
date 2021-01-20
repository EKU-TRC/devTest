import { Component, OnInit } from '@angular/core';
import { BudgetCodesService } from '../budget-codes.service';

@Component({
  selector: 'app-display-codes',
  templateUrl: './display-codes.component.html',
  styleUrls: ['./display-codes.component.css']
})
export class DisplayCodesComponent implements OnInit {
  singleCode = [];
  allCodes = [];
  specificYear = [];
  specificCode = [];
  constructor(private budgetService: BudgetCodesService) { }

  ngOnInit() {
    this.getSingleCode();
    this.getAllCodes();
    this.getSpecificYear();
    this.getSpecificCode();
  }

  getSingleCode() {
    this.budgetService.singleCode().subscribe( response => {
      // console.log(response);
      this.singleCode = response.data;
    });
  }
  getAllCodes() {
    this.budgetService.allCodes().subscribe( response => {
      // console.log(response);
      this.allCodes = response.data;
    });
  }
  getSpecificYear() {
    this.budgetService.specificYear().subscribe( response => {
      // console.log(response);
      this.specificYear = response.data;
    });
  }
  getSpecificCode() {
    this.budgetService.specificCode().subscribe( response => {
      console.log(response);
      this.specificCode = response.data;
    });
  }

}
