import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class LeaveRecordsService {
  private dataUrl = 'http://localhost:3000/employee-data';

  constructor(private http: HttpClient) { }

  getLeaveRecords(): Observable<{ 'employee-data': EmployeeData[] }> {
    return this.http.get<{ 'employee-data': EmployeeData[] }>(this.dataUrl);
  }
}
