import { Component, OnInit, Input } from '@angular/core';
import { IBudgetCode } from './budget-code.model';

@Component({
  selector: 'app-budget-code',
  templateUrl: './budget-code.component.html',
  styleUrls: ['./budget-code.component.scss'],
})
export class BudgetCodeComponent implements OnInit {

  constructor() { }

  @Input() budgetCode: IBudgetCode;


  ngOnInit() {

  }

}
