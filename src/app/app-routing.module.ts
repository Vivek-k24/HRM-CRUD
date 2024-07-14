import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { JobTitlesComponent } from './admin/job-titles/job-titles.component';
import { PayGradesComponent } from './admin/pay-grades/pay-grades.component';
import { EmploymentStatusComponent } from './admin/employment-status/employment-status.component';
import { JobCategoriesComponent } from './admin/job-categories/job-categories.component';
import { WorkShiftsComponent } from './admin/work-shifts/work-shifts.component';
import { GeneralInformationComponent } from './admin/general-information/general-information.component';
import { LocationsComponent } from './admin/locations/locations.component';
import { StructureComponent } from './admin/structure/structure.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { EducationComponent } from './admin/education/education.component';
import { LicensesComponent } from './admin/licenses/licenses.component';
import { LanguagesComponent } from './admin/languages/languages.component';
import { MembershipsComponent } from './admin/memberships/memberships.component';
import { NationalitiesComponent } from './admin/nationalities/nationalities.component';
import { CorporateBrandingComponent } from './admin/corporate-branding/corporate-branding.component';
import { EmailConfigurationComponent } from './admin/email-configuration/email-configuration.component';
import { EmailSubscriptionsComponent } from './admin/email-subscriptions/email-subscriptions.component';
import { LocalizationComponent } from './admin/localization/localization.component';
import { LanguagePackagesComponent } from './admin/language-packages/language-packages.component';
import { ModulesComponent } from './admin/modules/modules.component';
import { SocialMediaAuthenticationComponent } from './admin/social-media-authentication/social-media-authentication.component';
import { RegisterOauthClientComponent } from './admin/register-oauth-client/register-oauth-client.component';
import { LdapConfigurationComponent } from './admin/ldap-configuration/ldap-configuration.component';
import { PimComponent } from './pim/pim.component';
import { LeaveComponent } from './leave/leave.component';
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
import { TimeComponent } from './time/time.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { PerformanceComponent } from './performance/performance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectoryComponent } from './directory/directory.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ClaimComponent } from './claim/claim.component';
import { BuzzComponent } from './buzz/buzz.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
    { path: 'user-management', component: UserManagementComponent },
    { path: 'job-titles', component: JobTitlesComponent },
    { path: 'pay-grades', component: PayGradesComponent },
    { path: 'employment-status', component: EmploymentStatusComponent },
    { path: 'job-categories', component: JobCategoriesComponent },
    { path: 'work-shifts', component: WorkShiftsComponent },
    { path: 'general-information', component: GeneralInformationComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'structure', component: StructureComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'education', component: EducationComponent },
    { path: 'licenses', component: LicensesComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'memberships', component: MembershipsComponent },
    { path: 'nationalities', component: NationalitiesComponent },
    { path: 'corporate-branding', component: CorporateBrandingComponent },
    { path: 'email-configuration', component: EmailConfigurationComponent },
    { path: 'email-subscriptions', component: EmailSubscriptionsComponent },
    { path: 'localization', component: LocalizationComponent },
    { path: 'language-packages', component: LanguagePackagesComponent },
    { path: 'modules', component: ModulesComponent },
    { path: 'social-media-authentication', component: SocialMediaAuthenticationComponent },
    { path: 'register-oauth-client', component: RegisterOauthClientComponent },
    { path: 'ldap-configuration', component: LdapConfigurationComponent }
  ]},
  { path: 'pim', component: PimComponent },
  { path: 'leave', component: LeaveComponent, children: [
    { path: 'apply', component: ApplyComponent },
    { path: 'my-leave', component: MyLeaveComponent },
    { path: 'add-entitlements', component: AddEntitlementsComponent },
    { path: 'employee-entitlements', component: EmployeeEntitlementsComponent },
    { path: 'my-entitlements', component: MyEntitlementsComponent },
    { path: 'leave-entitlements-and-usage-reports', component: LeaveEntitlementsAndUsageReportsComponent },
    { path: 'my-leave-entitlements-and-usage-reports', component: MyLeaveEntitlementsAndUsageReportsComponent },
    { path: 'leave-period', component: LeavePeriodComponent },
    { path: 'leave-types', component: LeaveTypesComponent },
    { path: 'work-week', component: WorkWeekComponent },
    { path: 'holidays', component: HolidaysComponent },
    { path: 'leave-list', component: LeaveListComponent },
    { path: 'assign-leave', component: AssignLeaveComponent }
  ]},
  { path: 'time', component: TimeComponent },
  { path: 'recruitment', component: RecruitmentComponent },
  { path: 'my-info', component: MyInfoComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'buzz', component: BuzzComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
