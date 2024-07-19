import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveRecordsService } from 'src/app/services/leave-records.service';

@Component({
  selector: 'app-leave-entitlements-and-usage-reports',
  templateUrl: './leave-entitlements-and-usage-reports.component.html',
  styleUrls: ['./leave-entitlements-and-usage-reports.component.css']
})
export class LeaveEntitlementsAndUsageReportsComponent implements OnInit {
  leaveReportForm: FormGroup;
  filteredRecords: any[] = [];
  showTable = false;

  constructor(private fb: FormBuilder, private leaveRecordsService: LeaveRecordsService) {
    this.leaveReportForm = this.fb.group({
      generateFor: [''],
      employeeName: [''],
      leavePeriod: [''],
      leaveType: [''],
      location: [''],
      subUnit: [''],
      jobTitle: [''],
      includePastEmployees: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formValues = this.leaveReportForm.value;
    if (formValues.generateFor === 'employee') {
      const employeeName = formValues.employeeName;
      const leavePeriod = formValues.leavePeriod;

      this.leaveRecordsService.getLeaveRecordsByEmployee(employeeName, leavePeriod).subscribe(data => {
        this.filteredRecords = data;
        this.showTable = true;
      }, error => {
        console.error('Error fetching leave records', error);
        this.filteredRecords = [];
        this.showTable = true;
      });
    } else {
      const leaveType = formValues.leaveType;
      const leavePeriod = formValues.leavePeriod;
      const location = formValues.location;
      const subUnit = formValues.subUnit;
      const jobTitle = formValues.jobTitle;
      const includePastEmployees = formValues.includePastEmployees;

      this.leaveRecordsService.getLeaveRecordsByFilters(leaveType, leavePeriod, location, subUnit, jobTitle, includePastEmployees).subscribe(data => {
        this.filteredRecords = data;
        this.showTable = true;
      }, error => {
        console.error('Error fetching leave records', error);
        this.filteredRecords = [];
        this.showTable = true;
      });
    }
  }
}