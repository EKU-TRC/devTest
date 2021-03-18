import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-web-page',
  templateUrl: './show-web-page.component.html',
  styleUrls: ['./show-web-page.component.css']
})
export class ShowWebPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnClick() {
    console.log(window.location.href)
    window.location.href = "https://uat.trc.eku.edu/budgetcodeexam/api/index"
  }


}
