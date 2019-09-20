import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-error-page',
  template: `
    <div class="error-page">
      <h3 class="mat-display-2">Sorry</h3>
      <p class="mat-small">
        There is no content at this address.
        <a routerLink="/"> Please navigate to the main page </a>
      </p>
    </div>
  `,
  styles: [
    `
      .error-page {
        text-align: center;
        min-height: 100vh;
        padding-top: 3em;
      }
    `
  ]
})
export class ErrorPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
