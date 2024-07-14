import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEntitlementsComponent } from './employee-entitlements.component';

describe('EmployeeEntitlementsComponent', () => {
  let component: EmployeeEntitlementsComponent;
  let fixture: ComponentFixture<EmployeeEntitlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEntitlementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEntitlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
