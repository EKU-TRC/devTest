/**
 * Budget List Component Test Cases
 * 
 * Author: Kenneth Carroll
 * Date: 12/9/2020
 * Revision: 1
 * 
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MatFormFieldModule, 
  MatInputModule, 
  MatPaginatorModule, 
  MatSelectModule, 
  MatTableModule
} from '@angular/material'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule} from '@angular/router/testing';

import { BudgetCodesListComponent } from './budget-codes-list.component';

import { BudgetCodesService } from '../../shared/services/budget-codes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { BudgetCode } from 'src/app/shared/models/budget-code.model';

describe('BudgetCodesListComponent', () => {
  let component: BudgetCodesListComponent;
  let fixture: ComponentFixture<BudgetCodesListComponent>;
  let service: BudgetCodesService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BudgetCodesListComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientTestingModule,
        RouterTestingModule
      ], 
      providers: [
        BudgetCodesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(BudgetCodesListComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    service = fixture.debugElement.injector.get(BudgetCodesService);
    fixture.detectChanges();
  });

  // test that the component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test that the component has a table
  it('should contain a table', () => {

    // query table out of fixture
    let table = fixture.debugElement.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
  })

  it('should contain a paginator', () => {
    
    // query paginator out of fixture
    let paginator = fixture.debugElement.nativeElement.querySelector('mat-paginator');
    expect(paginator).toBeTruthy();
  })



  // tests that the component calls the method on init
  it('should call service getAllBudgetCodes on init', () => {

    // spy service for the method
    const serviceSpy = spyOn(service, 'getAllBudgetCodes').and.callThrough();

    // should not be called before init
    expect(serviceSpy).not.toHaveBeenCalled();

    // call init for componenet
    component.ngOnInit();

    // check if method was called
    expect(service.getAllBudgetCodes).toHaveBeenCalled(); 

  });
  it('should get its subscription from getBudgetCodesUpdatedListener', () => {

    // service spy
    const serviceSpy = spyOn(service, 'getBudgetCodesUpdatedListener').and.callThrough();
    
    // initialize component
    component.ngOnInit();

    // check if it was called
    expect(serviceSpy).toHaveBeenCalled();
    
  })
  it('should call getBudgetCodeByYear on a nav event', () => {
    
    // service spy
    const serviceSpy = spyOn(service, 'getBudgetCodeByYear').and.callThrough();

    //init compnenet
    component.ngOnInit()

    //trigger a navigate
    router.navigate(['/list/2020']);

    // check for execution
    expect(serviceSpy).toHaveBeenCalled();
    
  })
    
});
