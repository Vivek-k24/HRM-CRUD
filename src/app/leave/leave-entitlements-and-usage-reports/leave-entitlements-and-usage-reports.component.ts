import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveRecordsService } from '../../services/leave-records.service';

interface LeaveRecord {
  leaveType: string;
  entitlements: number;
  pendingApproval: number;
  scheduled: number;
  taken: number;
  balance: number;
  leavePeriodStart: string;
  leavePeriodEnd: string;
}

interface EmployeeData {
  employee: string;
  location: string;
  subUnit: string;
  jobTitle: string;
  leaveRecords: LeaveRecord[];
}

@Component({
  selector: 'app-leave-entitlements-and-usage-reports',
  templateUrl: './leave-entitlements-and-usage-reports.component.html',
  styleUrls: ['./leave-entitlements-and-usage-reports.component.css']
})
export class LeaveEntitlementsAndUsageReportsComponent implements OnInit {
  leaveReportForm: FormGroup;
  showTable = false;
  leaveRecords: EmployeeData[] = [];
  filteredRecords: LeaveRecord[] = [];

  constructor(private fb: FormBuilder, private leaveRecordsService: LeaveRecordsService) {
    this.leaveReportForm = this.fb.group({
      generateFor: ['employee'],
      employeeName: [''],
      leaveType: [''],
      leavePeriodStart: [''],
      leavePeriodEnd: [''],
      location: [''],
      subUnit: [''],
      jobTitle: ['']
    });
  }

  ngOnInit(): void {
    this.leaveRecordsService.getLeaveRecords().subscribe(response => {
      this.leaveRecords = response['employee-data'];
    });
  }

  onSubmit(): void {
    this.showTable = true;
    const formValues = this.leaveReportForm.value;

    if (formValues.generateFor === 'employee') {
      const employee = this.leaveRecords.find(record => record.employee.toLowerCase().includes(formValues.employeeName.toLowerCase()));
      this.filteredRecords = employee ? employee.leaveRecords : [];
    } else {
      this.filteredRecords = this.leaveRecords.flatMap(record => record.leaveRecords)
        .filter(leave => 
          (formValues.leaveType ? leave.leaveType === formValues.leaveType : true) &&
          (formValues.location ? this.leaveRecords.some(record => record.location === formValues.location && record.leaveRecords.includes(leave)) : true) &&
          (formValues.subUnit ? this.leaveRecords.some(record => record.subUnit === formValues.subUnit && record.leaveRecords.includes(leave)) : true) &&
          (formValues.jobTitle ? this.leaveRecords.some(record => record.jobTitle === formValues.jobTitle && record.leaveRecords.includes(leave)) : true) &&
          (formValues.leavePeriodStart ? new Date(leave.leavePeriodStart) >= new Date(formValues.leavePeriodStart) : true) &&
          (formValues.leavePeriodEnd ? new Date(leave.leavePeriodEnd) <= new Date(formValues.leavePeriodEnd) : true)
        );
    }
  }
}
