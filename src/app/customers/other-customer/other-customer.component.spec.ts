import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCustomerComponent } from './other-customer.component';

describe('OtherCustomerComponent', () => {
  let component: OtherCustomerComponent;
  let fixture: ComponentFixture<OtherCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
