import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBudgetComponent } from './get-budget.component';

describe('GetBudgetComponent', () => {
  let component: GetBudgetComponent;
  let fixture: ComponentFixture<GetBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
