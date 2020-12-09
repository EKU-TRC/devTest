import { Component, OnInit, Input } from '@angular/core';
import { BudgetCode } from './../../budget-code.model';


@Component({
  selector: 'app-code-item',
  templateUrl: './code-item.component.html',
  styleUrls: ['./code-item.component.css']
})
export class CodeItemComponent implements OnInit {
  @Input() code: BudgetCode;

  constructor() { }

  ngOnInit() {
  }

}
