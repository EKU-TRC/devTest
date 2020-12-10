/**
 * Budget List Component Test Cases
 * 
 * Author: Kenneth Carroll
 * Date: 12/9/2020
 * Revision: 2
 * 
 */

// angular imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule} from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser'
import { Router } from '@angular/router';

// local imports
import { BudgetCode } from 'src/app/shared/models/budget-code.model';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { BudgetCodesListComponent } from './budget-codes-list.component';
import { BudgetCodesService } from '../../shared/services/budget-codes.service';

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
        MaterialModule,
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
    component.loading = false;
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

    // should be null 
    expect(table).toBeNull();

    // hide the spinner
    component.loading=false;

    // update fixture
    fixture.detectChanges();

    // requery
    table = fixture.debugElement.nativeElement.querySelector('table');

    //exists
    expect(table).toBeTruthy();
  })

  it('should contain a paginator', () => {
    
    // query paginator out of fixture
    let paginator = fixture.debugElement.nativeElement.querySelector('mat-paginator');

    // check if exists
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

  it('should populate table rows based on  BudgetCode[]', () => {

    // populates component info for table
    component.budgetCodes = [
      new BudgetCode(1, 2020, "0-00001", "Test 1"),
      new BudgetCode(2, 2020, "0-00002", "Test 2"),
      new BudgetCode(3, 2020, "0-00003", "Test 3"),
      new BudgetCode(4, 2020, "0-00004", "Test 4")
    ];
    component.pagedBudgetCodes = new MatTableDataSource<BudgetCode>(component.budgetCodes);
    component.pagedBudgetCodes.paginator = component.paginator;

    //fixture update
    fixture.detectChanges();

    // query the table
    let table = fixture.debugElement.queryAll(By.css(".mat-table"));

    // verify that the array returns no results
    expect(table.length).toBe(0);

    // hide the spinner
    component.loading=false;

    // update fixture
    fixture.detectChanges();

    // requery
    table = fixture.debugElement.queryAll(By.css(".mat-table"));

    // verify it exists
    expect(table.length).not.toBe(0);

    // check that table rows exist, since they are child nodes
    expect(table[0].childNodes[1].nativeNode.nextElementSibling).toBeTruthy();

  })

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
