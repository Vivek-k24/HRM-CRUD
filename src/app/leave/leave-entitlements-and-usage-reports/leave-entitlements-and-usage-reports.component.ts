import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveRecordsService } from '../../services/leave-records.service';
import { LeaveRecord } from '../../models/leave-record.model';

@Component({
  selector: 'app-leave-entitlements-and-usage-reports',
  templateUrl: './leave-entitlements-and-usage-reports.component.html',
  styleUrls: ['./leave-entitlements-and-usage-reports.component.css']
})
export class LeaveEntitlementsAndUsageReportsComponent implements OnInit {
  leaveReportForm: FormGroup;
  filteredRecords: LeaveRecord[] = [];
  showTable: boolean = false;

  constructor(private fb: FormBuilder, private leaveRecordsService: LeaveRecordsService) {
    this.leaveReportForm = this.fb.group({
      generateFor: ['leaveType'],
      employeeName: [''],
      leavePeriodStart: [''],
      leavePeriodEnd: [''],
      leaveType: [''],
      location: [''],
      subUnit: [''],
      jobTitle: [''],
      includePastEmployees: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const filters = this.leaveReportForm.value;
    this.leaveRecordsService.getFilteredLeaveRecords(filters).subscribe(
      (data: LeaveRecord[]) => {
        this.filteredRecords = data;
        this.showTable = true;
      },
      error => {
        console.error('Error fetching filtered leave records', error);
        this.filteredRecords = [];
        this.showTable = true;
      }
    );
  }
}
