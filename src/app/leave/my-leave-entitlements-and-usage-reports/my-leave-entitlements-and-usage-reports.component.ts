import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveRecordsService } from 'src/app/services/leave-records.service';

@Component({
  selector: 'app-my-leave-entitlements-and-usage-reports',
  templateUrl: './my-leave-entitlements-and-usage-reports.component.html',
  styleUrls: ['./my-leave-entitlements-and-usage-reports.component.css']
})
export class MyLeaveEntitlementsAndUsageReportsComponent implements OnInit {
  leaveReportForm: FormGroup;
  leavePeriods = [{ label: '2024' }, { label: '2023' }, { label: '2022' }, { label: '2021' }];
  filteredRecords: any[] = [];
  showTable = false;

  constructor(private fb: FormBuilder, private leaveRecordsService: LeaveRecordsService) {
    this.leaveReportForm = this.fb.group({
      leavePeriod: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const leavePeriod = this.leaveReportForm.get('leavePeriod')?.value;

    this.leaveRecordsService.getLeaveRecordsByEmployee('Rajkumar', leavePeriod).subscribe(data => {
      this.filteredRecords = data;
      this.showTable = true;
    }, error => {
      console.error('Error fetching leave records', error);
      this.filteredRecords = [];
      this.showTable = true;
    });
  }
}