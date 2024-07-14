import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEntitlementsAndUsageReportsComponent } from './leave-entitlements-and-usage-reports.component';

describe('LeaveEntitlementsAndUsageReportsComponent', () => {
  let component: LeaveEntitlementsAndUsageReportsComponent;
  let fixture: ComponentFixture<LeaveEntitlementsAndUsageReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveEntitlementsAndUsageReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveEntitlementsAndUsageReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
