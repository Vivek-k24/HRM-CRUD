import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-leave-entitlements-and-usage-reports',
  templateUrl: './leave-entitlements-and-usage-reports.component.html',
  styleUrls: ['./leave-entitlements-and-usage-reports.component.css']
})
export class LeaveEntitlementsAndUsageReportsComponent implements OnInit {
  leaveReportForm: FormGroup;
  records: EmployeeRecord[] = [];
  filteredRecords: EmployeeRecord[] = [];
  showTable = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.leaveReportForm = this.fb.group({
      generateFor: [''],
      employeeName: [''],
      leaveType: [''],
      leavePeriodStart: [''],
      leavePeriodEnd: [''],
      location: [''],
      subUnit: [''],
      jobTitle: [''],
      includePastEmployees: [false]
    });
  }

  ngOnInit(): void {
    this.http.get<{ 'employee-data': EmployeeRecord[] }>('/assets/employee-data.json').subscribe(data => {
      this.records = data['employee-data'];
    });
  }

  onSubmit(): void {
    this.filterRecords();
    this.showTable = true;
  }

  filterRecords(): void {
    const generateFor = this.leaveReportForm.get('generateFor')?.value;
    const employeeName = this.leaveReportForm.get('employeeName')?.value.toLowerCase();
    const leaveType = this.leaveReportForm.get('leaveType')?.value;
    const leavePeriodStart = this.leaveReportForm.get('leavePeriodStart')?.value;
    const leavePeriodEnd = this.leaveReportForm.get('leavePeriodEnd')?.value;

    this.filteredRecords = this.records.filter(record => {
      let match = true;

      if (generateFor === 'employee' && employeeName) {
        match = record.employee.toLowerCase().includes(employeeName);
      } else if (generateFor === 'leaveType' && leaveType) {
        match = record.leaveRecords.some((leave: LeaveRecord) => leave.leaveType === leaveType);
      }

      if (leavePeriodStart && leavePeriodEnd) {
        match = match && record.leaveRecords.some((leave: LeaveRecord) => {
          return leave.leavePeriodStart >= leavePeriodStart && leave.leavePeriodEnd <= leavePeriodEnd;
        });
      }

      return match;
    });
  }
}
