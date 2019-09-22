import { Component, OnInit, Input } from '@angular/core';
import { IBudgetCode } from './budget-code.model';
import { GetBudgetCodeService } from '../shared/budgetCodeGet.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-budget-code',
  templateUrl: './budget-code.component.html',
  styleUrls: ['./budget-code.component.scss'],
})
export class BudgetCodeComponent implements OnInit {
  private sub: any;
  protected budgetCodeIndex: number;
  budgetCode: IBudgetCode;

  constructor(private route: ActivatedRoute, private budgetService: GetBudgetCodeService) { }
  getBudget(): void {
    this.budgetService.getBudgetCodes().subscribe(
      budgetCode => this.budgetCode = budgetCode[0]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.budgetCodeIndex = +params.id;
      this.getBudget();
    });
  }

}
