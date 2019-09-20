import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-error-page',
  template: `
    <h3 class="mat-display-2">Sorry</h3>
    <p>There is no content at this address.  <a routerLink="/"> Please navigate to the main page </a> </p>  
  `,
  styles: []
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
