import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { PimComponent } from './pim/pim.component';
import { LeaveComponent } from './leave/leave.component';
import { TimeComponent } from './time/time.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { PerformanceComponent } from './performance/performance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectoryComponent } from './directory/directory.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ClaimComponent } from './claim/claim.component';
import { BuzzComponent } from './buzz/buzz.component';
import { ApplyComponent } from './leave/apply/apply.component';
import { MyLeaveComponent } from './leave/my-leave/my-leave.component';
import { AddEntitlementsComponent } from './leave/add-entitlements/add-entitlements.component';
import { EmployeeEntitlementsComponent } from './leave/employee-entitlements/employee-entitlements.component';
import { MyEntitlementsComponent } from './leave/my-entitlements/my-entitlements.component';
import { LeaveEntitlementsAndUsageReportsComponent } from './leave/leave-entitlements-and-usage-reports/leave-entitlements-and-usage-reports.component';
import { MyLeaveEntitlementsAndUsageReportsComponent } from './leave/my-leave-entitlements-and-usage-reports/my-leave-entitlements-and-usage-reports.component';
import { LeavePeriodComponent } from './leave/leave-period/leave-period.component';
import { LeaveTypesComponent } from './leave/leave-types/leave-types.component';
import { WorkWeekComponent } from './leave/work-week/work-week.component';
import { HolidaysComponent } from './leave/holidays/holidays.component';
import { LeaveListComponent } from './leave/leave-list/leave-list.component';
import { AssignLeaveComponent } from './leave/assign-leave/assign-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PimComponent,
    LeaveComponent,
    TimeComponent,
    RecruitmentComponent,
    MyInfoComponent,
    PerformanceComponent,
    DashboardComponent,
    DirectoryComponent,
    MaintenanceComponent,
    ClaimComponent,
    BuzzComponent,
    ApplyComponent,
    MyLeaveComponent,
    AddEntitlementsComponent,
    EmployeeEntitlementsComponent,
    MyEntitlementsComponent,
    LeaveEntitlementsAndUsageReportsComponent,
    MyLeaveEntitlementsAndUsageReportsComponent,
    LeavePeriodComponent,
    LeaveTypesComponent,
    WorkWeekComponent,
    HolidaysComponent,
    LeaveListComponent,
    AssignLeaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
