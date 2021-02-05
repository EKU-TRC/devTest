import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcodesComponent } from './addcodes.component';

describe('AddcodesComponent', () => {
  let component: AddcodesComponent;
  let fixture: ComponentFixture<AddcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
