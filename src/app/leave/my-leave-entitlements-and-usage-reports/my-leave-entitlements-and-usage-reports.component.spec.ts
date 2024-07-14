import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeaveEntitlementsAndUsageReportsComponent } from './my-leave-entitlements-and-usage-reports.component';

describe('MyLeaveEntitlementsAndUsageReportsComponent', () => {
  let component: MyLeaveEntitlementsAndUsageReportsComponent;
  let fixture: ComponentFixture<MyLeaveEntitlementsAndUsageReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLeaveEntitlementsAndUsageReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLeaveEntitlementsAndUsageReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
