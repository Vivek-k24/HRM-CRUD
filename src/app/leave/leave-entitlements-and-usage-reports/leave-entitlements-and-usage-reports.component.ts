import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveRecordsService } from '../../services/leave-records.service';
import { EmployeeData, LeaveRecord } from '../../models/leave-record.model';

@Component({
  selector: 'app-leave-entitlements-and-usage-reports',
  templateUrl: './leave-entitlements-and-usage-reports.component.html',
  styleUrls: ['./leave-entitlements-and-usage-reports.component.css']
})
export class LeaveEntitlementsAndUsageReportsComponent implements OnInit {
  leaveReportForm: FormGroup;
  showTable = false;
  leaveRecords: EmployeeData[] = [];
  filteredRecords: EmployeeData[] = [];

  constructor(private fb: FormBuilder, private leaveRecordsService: LeaveRecordsService) {
    this.leaveReportForm = this.fb.group({
      generateFor: ['employee'],
      employeeName: [''],
      leavePeriodStart: [''],
      leavePeriodEnd: [''],
      leaveType: [''],
      leavePeriod: [''],
      location: [''],
      subUnit: [''],
      jobTitle: [''],
      includePastEmployees: [false]
    });
  }

  ngOnInit(): void {
    this.leaveRecordsService.getLeaveRecords().subscribe(response => {
      this.leaveRecords = response['employee-data'];
      this.filteredRecords = this.leaveRecords;
      console.log('Fetched leave records:', this.leaveRecords);
    });
  }

  onSubmit(): void {
    this.showTable = true;
    const formValues = this.leaveReportForm.value;

    if (formValues.generateFor === 'employee') {
      this.filteredRecords = this.leaveRecords.filter(record => 
        (formValues.employeeName ? record.employee.toLowerCase().includes(formValues.employeeName.toLowerCase()) : true)
        && (formValues.leavePeriodStart ? new Date(formValues.leavePeriodStart) <= new Date() : true)
        && (formValues.leavePeriodEnd ? new Date(formValues.leavePeriodEnd) >= new Date() : true)
      );
    } else if (formValues.generateFor === 'leaveType') {
      this.filteredRecords = this.leaveRecords.filter(record => 
        record.leaveRecords.some(leave => 
          leave.leaveType === formValues.leaveType
        )
        && (formValues.jobTitle ? record.jobTitle === formValues.jobTitle : true)
        && (formValues.location ? record.location === formValues.location : true)
        && (formValues.subUnit ? record.subUnit === formValues.subUnit : true)
        && (formValues.leavePeriodStart ? new Date(formValues.leavePeriodStart) <= new Date() : true)
        && (formValues.leavePeriodEnd ? new Date(formValues.leavePeriodEnd) >= new Date() : true)
      );
    } else {
      this.filteredRecords = this.leaveRecords;
    }

    console.log('Filtered records:', this.filteredRecords);
  }

  editRecord(record: EmployeeData): void {
  }

  deleteRecord(record: EmployeeData): void {
    this.leaveRecordsService.deleteLeaveRecord(record.employee).subscribe(() => {
      this.leaveRecords = this.leaveRecords.filter(r => r.employee !== record.employee);
      this.filteredRecords = this.leaveRecords;
    });
  }
}
