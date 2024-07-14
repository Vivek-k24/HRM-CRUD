import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EmployeeData, EmployeeDataResponse } from '../models/leave-record.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveRecordsService {
  private dataUrl = 'http://localhost:3000/employee-data'; // Ensure this URL is correct

  constructor(private http: HttpClient) { }

  getLeaveRecords(): Observable<EmployeeDataResponse> {
    return this.http.get<EmployeeDataResponse>(this.dataUrl);
  }

  updateLeaveRecords(records: EmployeeData[]): Observable<void> {
    return this.http.put<void>(this.dataUrl, { 'employee-data': records });
  }

  addLeaveRecord(record: EmployeeData): Observable<void> {
    return this.getLeaveRecords().pipe(
      switchMap(response => {
        const records = response['employee-data'];
        records.push(record);
        return this.updateLeaveRecords(records);
      })
    );
  }

  updateLeaveRecord(record: EmployeeData): Observable<void> {
    return this.getLeaveRecords().pipe(
      switchMap(response => {
        const records = response['employee-data'];
        const index = records.findIndex(r => r.employee === record.employee);
        if (index !== -1) {
          records[index] = record;
        }
        return this.updateLeaveRecords(records);
      })
    );
  }

  deleteLeaveRecord(employee: string): Observable<void> {
    return this.getLeaveRecords().pipe(
      switchMap(response => {
        const records = response['employee-data'].filter(record => record.employee !== employee);
        return this.updateLeaveRecords(records);
      })
    );
  }
}
