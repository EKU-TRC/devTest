import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBudgetsComponent } from './show-budgets.component';

describe('ShowBudgetsComponent', () => {
  let component: ShowBudgetsComponent;
  let fixture: ComponentFixture<ShowBudgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBudgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
