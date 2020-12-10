/**
 * Budget Form Component Test Cases
 * 
 * Author: Kenneth Carroll
 * date: 12/9/10
 * revision: 2
 */

// angular imports
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// local imports
import { BudgetCodesService } from 'src/app/shared/services/budget-codes.service';
import { BudgetCodeFormComponent } from './budget-code-form.component';
import { MaterialModule } from '../../shared/modules/material/material.module';

describe('BudgetCodeFormComponent', () => {
  let component: BudgetCodeFormComponent;
  let fixture: ComponentFixture<BudgetCodeFormComponent>;
  let service: BudgetCodesService;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCodeFormComponent ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule, 
        RouterTestingModule,
        FormsModule
      ], 
      providers: [
        BudgetCodesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCodeFormComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(BudgetCodesService);
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  });

  // validate component creatiion
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // validate component button
  it('Should contain a submit button', () => {
    let btn = fixture.debugElement.nativeElement.querySelector('.form__button');
    expect(btn).toBeTruthy();
  });

  // check if submit button triggers the submisison event
  it('Should submit on button press', () => {

    // query button
    let btn = fixture.debugElement.nativeElement.querySelector('.form__button');
    
    // create spy
    const serviceSpy = spyOn(service, 'postNewBudgetCode').and.callThrough();

    //ensure has not been called somehow
    expect(serviceSpy).not.toHaveBeenCalled();

    // init the component
    component.ngOnInit();

    // trigger the click
    btn.click();

    //validate the call
    expect(serviceSpy).toHaveBeenCalled();
  });

  // check if the listener is called on ngInit
  it('should call the form status listener on init', () => {

    // create spy
    const serviceSpy = spyOn(service, 'getFormStatusListenter').and.callThrough();

    // ensure the method has not been called
    expect(serviceSpy).not.toHaveBeenCalled();

    // init
    component.ngOnInit();

    // should have been executed
    expect(serviceSpy).toHaveBeenCalled();
  })

  it('should update budget code with form values', fakeAsync(() => {

    // init the component
    component.ngOnInit();
    
    // check that values are init at null
    expect(component.budgetCode.budgetCode).toBeNull();
    expect(component.budgetCode.budgetTitle).toBeNull();
    expect(component.budgetCode.fiscalYear).toBeNull();

    // query all 3 inputs
    let codeInput = fixture.debugElement.nativeElement.querySelector('#budgetCodeInput')
    let titleInput = fixture.debugElement.nativeElement.querySelector('#budgetTitleInput')
    let yearInput = fixture.debugElement.nativeElement.querySelector('#fiscalYearInput')

    // update value
    codeInput.value ="0-00001";

    //dispatch event
    codeInput.dispatchEvent(new Event('input'));

    //update and dispatch
    titleInput.value = "test";
    titleInput.dispatchEvent(new Event('input'));

    //update and dispatch
    yearInput.value = 2020;
    yearInput.dispatchEvent(new Event('input'));

    //call detect changes
    fixture.detectChanges();

    //wait until stable then verify
    fixture.whenStable().then(()=> {
      expect(component.budgetCode.budgetCode).toBe("0-00001");
      expect(component.budgetCode.budgetTitle).toBe("test");
      expect(component.budgetCode.fiscalYear).toBe(2020);
    })
    
  }))
  // validate spinner conditional rendering
  it("should render mat-spinner conditionally", () => {

    // initialize loading true
    component.loading = true;

    // update fixture
    fixture.detectChanges();

    // query spinner
    let spinner = fixture.debugElement.nativeElement.querySelector('mat-spinner');

    // verify render
    expect(spinner).toBeTruthy();

    // set loading false
    component.loading = false;

    // update
    fixture.detectChanges();

    // requery
    spinner = fixture.debugElement.nativeElement.querySelector('mat-spinner');

    // expect no rendering
    expect(spinner).toBeNull();
    
  })

});
