/**
 *  Navigation Header Component TS
 * 
 *  Author: Kenneth Carroll
 *  Date: 12/8/2020
 *  Revision 1
 * 
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BudgetCodesService } from 'src/app/shared/services/budget-codes.service';


@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit, OnDestroy{

  // years array - will always have "all years" as an option
  years: string[] = ["All Years"]

  // subscription to retrieve the information
  yearsSub: Subscription;

  // service injection, routing
  constructor(private budgetCodeService: BudgetCodesService, private router: Router) { }

  ngOnInit() {

    // subscribe to the listener
    this.yearsSub = this.budgetCodeService.getDistinctYearsListener()
      .subscribe((data) => {

        // append the years
        this.years = [...this.years, ...data.distinctYears.sort()];
      })
  }

  // navigate to list with optional filter
  navigateToList(value: string) {
    this.router.navigate(['/list/', value]);
  }

  // navigate to form
  navigateToForm() {
    this.router.navigate(['/form/'])
  }

  // remove subscription on destroy
  ngOnDestroy(){
    this.yearsSub.unsubscribe();
  }

}
