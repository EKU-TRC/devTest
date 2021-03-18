import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWebPageComponent } from './show-web-page.component';

describe('ShowWebPageComponent', () => {
  let component: ShowWebPageComponent;
  let fixture: ComponentFixture<ShowWebPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWebPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWebPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
