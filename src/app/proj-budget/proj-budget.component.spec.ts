import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjBudgetComponent } from './proj-budget.component';

describe('ProjBudgetComponent', () => {
  let component: ProjBudgetComponent;
  let fixture: ComponentFixture<ProjBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
