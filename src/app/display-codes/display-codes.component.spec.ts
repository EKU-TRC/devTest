import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCodesComponent } from './display-codes.component';

describe('DisplayCodesComponent', () => {
  let component: DisplayCodesComponent;
  let fixture: ComponentFixture<DisplayCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
