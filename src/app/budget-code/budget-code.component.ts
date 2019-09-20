import { Component, OnInit, Input } from '@angular/core';
import { IBudgetCode } from './budget-code.model';
import { GetBudgetCodeService } from '../shared/budgetCodeGetService';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-budget-code',
  templateUrl: './budget-code.component.html',
  styleUrls: ['./budget-code.component.scss'],
})
export class BudgetCodeComponent implements OnInit {
  private sub: any;
  protected budgetCodeIndex: number;
  budgetCode: IBudgetCode;

  constructor(private route: ActivatedRoute) { }



  // @Input() budgetCode: IBudgetCode;


//  EXAMPLE_DATA: IBudgetCode = GetBudgetCodeService.getBudgetCode();

  // budgetCode = this.EXAMPLE_DATA;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.budgetCodeIndex = +params.id;

      this.budgetCode = GetBudgetCodeService.getBudgetCode(this.budgetCodeIndex);

    });
  }

}
