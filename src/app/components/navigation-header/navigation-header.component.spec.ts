/**
 *  Navigation Header Component Tests
 * 
 *  author: Kenneth Carroll
 *  date: 12/9/10
 *  revision: 2
 */

// angular imports
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing';

// local imports
import { BudgetCodesService } from 'src/app/shared/services/budget-codes.service';
import { NavigationHeaderComponent } from './navigation-header.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

describe('NavigationHeaderComponent', () => {
  let component: NavigationHeaderComponent;
  let fixture: ComponentFixture<NavigationHeaderComponent>;
  let service: BudgetCodesService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationHeaderComponent ], 
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule, 
        RouterTestingModule,
        MaterialModule
      ],
      providers: [
        BudgetCodesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationHeaderComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    service = fixture.debugElement.injector.get(BudgetCodesService);
    fixture.detectChanges();
  });

  // should be created
  it('should create', () => {

    // check if exists
    expect(component).toBeTruthy();
  });

  // should contain a button
  it('should have a button for a new budget code', () => {
    
    // query the button
    let btn = fixture.debugElement.nativeElement.querySelector('button');

    // button exists
    expect(btn).toBeTruthy();
  });

  // check that selector loads
  it("should contain a mat selector", () => {

    //query the selector
    let sel = fixture.debugElement.nativeElement.querySelector('mat-select');

    // selector exists
    expect(sel).toBeTruthy();
  });

  // check that year sub is called on init
  it("should call getDistinctYears on init", ()=> {

    // create the spy
    const serviceSpy = spyOn(service, 'getDistinctYearsListener').and.callThrough();
    
    // check it has not executed
    expect(serviceSpy).not.toHaveBeenCalled();

    // init
    component.ngOnInit()

    // method should have executed
    expect(serviceSpy).toHaveBeenCalled();

  })

  // test populated options
  it("should populate a list of options", () => {
    
    // init component
    component.ngOnInit();

    // set the years array
    component.years = ["All Years", "2020"];

    // detect changes
    fixture.detectChanges();

    // grab the selector
    let select = fixture.debugElement.nativeElement.querySelector('.mat-select');

    // trigger the selector to open
    select.click();

    // detect fixture changes
    fixture.detectChanges();

    // query all year options
    let yearOption=fixture.debugElement.queryAll(By.css('.mat-option'));

    // length should not be 0
    expect(yearOption.length).not.toBe(0);

    // verify that length matches the above array
    expect(yearOption.length).toBe(2);
    
  });

  // test navigation of selector
  it('should navigate to /list/YEAR on selection', () => {

    const routerSpy = spyOn(router, 'navigate');
    const navSpy = spyOn(component, 'navigateToList');

    // init component
    component.ngOnInit();

    // check that router has not been called
    expect(routerSpy).not.toHaveBeenCalled();

    // check that the component method has not been called
    expect(navSpy).not.toHaveBeenCalled();

    // set the years array
    component.years = ["All Years", "2020"];

    // detect changes
    fixture.detectChanges();

    // grab the selector
    let select = fixture.debugElement.queryAll(By.css('.mat-select'));

    // trigger the selector to open
    select[0].nativeElement.click();

    // detect fixture changes
    fixture.detectChanges();

    //grab year options
    let yearOption=fixture.debugElement.queryAll(By.css('.mat-option'));

    // verify teh length 
    expect(yearOption.length).not.toBe(0);
    
    // click the object
    yearOption[1].nativeElement.click();

    // validate that the method was called
    expect(navSpy).toHaveBeenCalled();
  })

  it('should navigate to /form/ on button press', () => {
    // create the spy
    const routerSpy = spyOn(router, 'navigate');
    const navSpy = spyOn(component, 'navigateToForm').and.callThrough();
    
    // query the button
    let btn = fixture.debugElement.nativeElement.querySelector('button');

    // init the component
    component.ngOnInit();

    // check component nav method has not happened
    expect(navSpy).not.toHaveBeenCalled();

    // check it has not been called
    expect(routerSpy).not.toHaveBeenCalled();

    // click the button
    btn.click()

    // expect the component nav method to have been called
    expect(routerSpy).toHaveBeenCalled();

    // check that navigate has been called
    expect(routerSpy).toHaveBeenCalled();
  })

});
