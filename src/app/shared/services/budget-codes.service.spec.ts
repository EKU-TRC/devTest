/**
 * Budget Codes Service Testing File
 * 
 * author: Kenneth Carroll
 * date: 12/9/2020
 * revision: 1
 * 
 */

// angular imports
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

// local imports
import { BudgetCodesService } from './budget-codes.service';
import { BudgetCode } from '../models/budget-code.model'

describe('BudgetCodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: BudgetCodesService = TestBed.get(BudgetCodesService);
    expect(service).toBeTruthy();
  });

  // validate method existence
  it('should have a getAllBudgetCodes function', () => {
    const service: BudgetCodesService = TestBed.get(BudgetCodesService);
    expect(service.getAllBudgetCodes).not.toBeNull();
  });

  // validate method existence
  it('should have a getBudgetCodeByYear function', () => {
    const service: BudgetCodesService = TestBed.get(BudgetCodesService);
    expect(service.getBudgetCodeByYear).not.toBeNull();
  })

  // validate listener return type
  it('should provide a listener as obervable for subscribers', () => {
    const service: BudgetCodesService = TestBed.get(BudgetCodesService);
    
    // define a null object
    let val: Observable<{
      codes: BudgetCode[],
      count: number,
      message: string,
      status: string
    }> = null;

    // call the service
    val = service.getBudgetCodesUpdatedListener();

    // ensure the value isn't null
    expect(val).not.toBeNull();
  })

  // validate listener return type
  it('should provide an Observable to listener for budget year codes', () => {
    
    // create service
    const service: BudgetCodesService = TestBed.get(BudgetCodesService);
    
    // initalize null test
    let test: Observable<{distinctYears: string[]}> = null;
    
    // call service
    test = service.getDistinctYearsListener();

    // see if object returned
    expect(test).not.toBeNull();
  })

  // validate listener return type
  it('should provide an observable to listeners for form status', () => {

    //create service
    const service: BudgetCodesService = TestBed.get(BudgetCodesService);

    // declare null test
    let test: Observable<{status: string, message: string}>;

    // assing from listener
    test = service.getFormStatusListenter();

    // check that it isn't null
    expect(test).not.toBeNull();
  })

  // validate method existence
  it('should have a postNewBudgetCode function', () => {
    const service: BudgetCodesService = TestBed.get(BudgetCodesService);

    expect(service.postNewBudgetCode(new BudgetCode(1, 2020, "", ""))).not.toBeNull();
  })
});
