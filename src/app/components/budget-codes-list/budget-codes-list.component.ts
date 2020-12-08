/**
 *  Budget Code List Component Typescript
 * 
 *  author: Kenneth Carroll
 *  date: 12/8/2020
 *  revision: 3
 */

// angular imports
import { Component, OnDestroy, OnInit } from '@angular/core';

// rxjs imports
import { Subscription } from 'rxjs';

// local imports
import { BudgetCode } from '../../shared/models/budget-code.model';
import { BudgetCodesService } from 'src/app/shared/services/budget-codes.service';

@Component({
  selector: 'app-budget-codes-list',
  templateUrl: './budget-codes-list.component.html',
  styleUrls: ['./budget-codes-list.component.css']
})
export class BudgetCodesListComponent implements OnInit, OnDestroy {

  // internal array of budget codes for template access
  budgetCodes: BudgetCode[] = [];

  // total number of budget codes
  totalCodes: number = 0;

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

      //update total codes
      this.totalCodes = codeData.count;
    })
  }

  ngOnDestroy() {

    //unsubscribe
    this.codeSub.unsubscribe();
  }

}
