import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-budgets',
  templateUrl: './show-budgets.component.html',
  styleUrls: ['./show-budgets.component.css']
})
export class ShowBudgetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnClick() {
    console.log(window.location.href)
    window.location.href = "https://uat.trc.eku.edu/budgetcodeexam/api/all"
  }

}
