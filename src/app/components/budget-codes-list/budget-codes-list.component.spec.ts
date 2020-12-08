import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCodesListComponent } from './budget-codes-list.component';

describe('BudgetCodesListComponent', () => {
  let component: BudgetCodesListComponent;
  let fixture: ComponentFixture<BudgetCodesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCodesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
