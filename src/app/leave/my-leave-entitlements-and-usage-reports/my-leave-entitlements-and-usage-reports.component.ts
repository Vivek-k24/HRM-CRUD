import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

interface EmployeeRecord {
  employee: string;
  location: string;
  subUnit: string;
  jobTitle: string;
  leaveRecords: LeaveRecord[];
}

@Component({
  selector: 'app-my-leave-entitlements-and-usage-reports',
  templateUrl: './my-leave-entitlements-and-usage-reports.component.html',
  styleUrls: ['./my-leave-entitlements-and-usage-reports.component.css']
})
export class MyLeaveEntitlementsAndUsageReportsComponent implements OnInit {
  leaveReportForm: FormGroup;
  records: EmployeeRecord[] = [];
  filteredRecords: EmployeeRecord[] = [];
  showTable = false;

  leavePeriods = [
    { label: '2024-01-01 - 2024-12-31', start: '2024-01-01', end: '2024-12-31' },
    { label: '2023-01-01 - 2023-12-31', start: '2023-01-01', end: '2023-12-31' },
    { label: '2022-01-01 - 2022-12-31', start: '2022-01-01', end: '2022-12-31' },
    { label: '2021-01-01 - 2021-12-31', start: '2021-01-01', end: '2021-12-31' },
    { label: '2020-01-01 - 2020-12-31', start: '2020-01-01', end: '2020-12-31' }
  ];

  constructor(private fb: FormBuilder) {
    this.leaveReportForm = this.fb.group({
      leavePeriod: ['2024']
    });
  }

  ngOnInit(): void {
    // Remove HTTP request and initialize records directly or fetch them from another source if needed
    this.records = [];  // Example: Initialize with empty array or predefined data
  }

  onSubmit(): void {
    this.filterRecords();
    this.showTable = true;
  }

  filterRecords(): void {
    const selectedPeriod = this.leaveReportForm.get('leavePeriod')?.value;
    const period = this.leavePeriods.find(p => p.label === selectedPeriod);

    if (period) {
      this.filteredRecords = this.records.filter(record => {
        return record.leaveRecords.some(leave => 
          leave.leavePeriodStart === period.start && leave.leavePeriodEnd === period.end
        );
      });
    }
  }
}
