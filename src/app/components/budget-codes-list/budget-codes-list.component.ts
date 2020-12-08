/**
 *  Budget Code List Component Typescript
 * 
 *  author: Kenneth Carroll
 *  date: 12/8/2020
 *  revision: 3
 */

// angular imports
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

// rxjs imports
import { Subscription } from 'rxjs';

// local imports
import { BudgetCode } from '../../shared/models/budget-code.model';
import { BudgetCodesService } from 'src/app/shared/services/budget-codes.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-budget-codes-list',
  templateUrl: './budget-codes-list.component.html',
  styleUrls: ['./budget-codes-list.component.css']
})
export class BudgetCodesListComponent implements OnInit, OnDestroy {

  // internal array of budget codes for template access
  budgetCodes: BudgetCode[] = [];

  // paged adjustment of the array
  pagedBudgetCodes: MatTableDataSource<BudgetCode> = new MatTableDataSource<BudgetCode>(this.budgetCodes);

  // View Child for pagination
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  // total number of budget codes
  totalCodes: number = 0;

  // array of columns for material table rendering 
  displayedColumns: string[] = ["bCode", "bTitle", "fYear"];

  // private subscription to the code service
  private codeSub: Subscription
  constructor(private budgetCodeService: BudgetCodesService) { }

  ngOnInit() {

    // call the initial http request for the service
    this.budgetCodeService.getAllBudgetCodes();

    //subscribe to the listener
    this.codeSub = this.budgetCodeService.getBudgetCodesUpdatedListener()
    .subscribe((codeData: {codes: BudgetCode[], count: number}) => {

      //update budget codes array for data display
      this.budgetCodes = codeData.codes;

      //update the padgedBudgetCodes with the new data
      this.pagedBudgetCodes = new MatTableDataSource<BudgetCode>(this.budgetCodes);

      //update the paginator
      this.pagedBudgetCodes.paginator = this.paginator;

      //update total codes
      this.totalCodes = codeData.count;
    })
  }

  ngOnDestroy() {

    //unsubscribe
    this.codeSub.unsubscribe();
  }

}
