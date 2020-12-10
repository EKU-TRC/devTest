/**
 *  App Module Test Cases
 * 
 *  Author: Kenneth Carroll
 *  date: 12/9/20
 *  revision: 1
 */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatPaginatorModule, MatSelectModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BudgetCodeFormComponent } from './components/budget-code-form/budget-code-form.component';
import { BudgetCodesListComponent } from './components/budget-codes-list/budget-codes-list.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatTableModule,
        MatOptionModule,
        MatSelectModule,
        MatPaginatorModule
      ],
      declarations: [
        AppComponent,
        NavigationHeaderComponent, 
        BudgetCodesListComponent,
        BudgetCodeFormComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'devTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('devTest');
  });
});
