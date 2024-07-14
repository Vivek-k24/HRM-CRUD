import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveRecordsService } from '../../services/leave-records.service';
import { LeaveRecord, EmployeeData } from '../../models/leave-record.model';

@Component({
  selector: 'app-my-leave-entitlements-and-usage-reports',
  templateUrl: './my-leave-entitlements-and-usage-reports.component.html',
  styleUrls: ['./my-leave-entitlements-and-usage-reports.component.css']
})
export class MyLeaveEntitlementsAndUsageReportsComponent implements OnInit {
  leaveReportForm: FormGroup;
  showTable = false;
  leaveRecords: LeaveRecord[] = [];
  filteredLeaveRecords: LeaveRecord[] = [];
  leavePeriods: { start: string, end: string }[] = [];

  constructor(private fb: FormBuilder, private leaveRecordsService: LeaveRecordsService) {
    this.leaveReportForm = this.fb.group({
      leavePeriod: ['']
    });
  }

  ngOnInit(): void {
    this.generateLeavePeriods();
    this.leaveRecordsService.getLeaveRecords().subscribe(response => {
      console.log('Response from server:', response);
      if (response && response['employee-data']) {
        const currentEmployee = response['employee-data'].find(emp => emp.employee === 'ABDC 010Z');
        if (currentEmployee) {
          this.leaveRecords = currentEmployee.leaveRecords;
          this.filteredLeaveRecords = this.leaveRecords;
          console.log('Current employee leave records:', this.leaveRecords);
        } else {
          console.log('Current employee not found.');
        }
      } else {
        console.log('Unexpected response structure:', response);
      }
    }, error => {
      console.error('Error fetching leave records:', error);
    });
  }

  generateLeavePeriods(): void {
    const periods = [];
    const endDate = new Date('2024-12-31');
    let startDate = new Date('2024-01-01');

    while (startDate <= endDate) {
      const periodStart = new Date(startDate);
      const periodEnd = new Date(startDate);
      periodEnd.setMonth(periodEnd.getMonth() + 6);
      periodEnd.setDate(periodEnd.getDate() - 1);
      
      periods.push({
        start: periodStart.toISOString().split('T')[0],
        end: periodEnd.toISOString().split('T')[0]
      });
      
      startDate.setMonth(startDate.getMonth() + 6);
    }

    this.leavePeriods = periods;
    console.log('Generated leave periods:', this.leavePeriods);
  }

  onSubmit(): void {
    this.showTable = true;
    const formValues = this.leaveReportForm.value;
    const selectedPeriod = this.leavePeriods.find(period => period.start === formValues.leavePeriod);

    if (selectedPeriod) {
      this.filteredLeaveRecords = this.leaveRecords.filter(leave => 
        new Date(leave.leavePeriod.start) <= new Date(selectedPeriod.end)
        && new Date(leave.leavePeriod.end) >= new Date(selectedPeriod.start)
      );
    } else {
      this.filteredLeaveRecords = this.leaveRecords;
    }

    console.log('Filtered leave records:', this.filteredLeaveRecords);
  }
}
