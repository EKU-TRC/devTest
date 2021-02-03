import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetcodesComponent } from './budgetcodes.component';

describe('BudgetcodesComponent', () => {
  let component: BudgetcodesComponent;
  let fixture: ComponentFixture<BudgetcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
