import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveRecordsService {

  private apiUrl = 'http://localhost:5080/api/LeaveRecords';

  constructor(private http: HttpClient) { }

  getLeaveRecordsByEmployee(employeeName: string, leavePeriod: string): Observable<any> {
    console.log(`Calling getLeaveRecordsByEmployee with ${employeeName}, ${leavePeriod}`);
    return this.http.get<any>(`${this.apiUrl}/employee?employeeName=${employeeName}&leavePeriod=${leavePeriod}`);
  }
  

  getLeaveRecordsByFilters(leaveType: string, leavePeriod: string, location: string, subUnit: string, jobTitle: string, includePastEmployees: boolean): Observable<any> {
    const url = `${this.apiUrl}/filters?leaveType=${leaveType}&leavePeriod=${leavePeriod}&location=${location}&subUnit=${subUnit}&jobTitle=${jobTitle}&includePastEmployees=${includePastEmployees}`;
    console.log(`Calling getLeaveRecordsByFilters with URL: ${url}`);
    return this.http.get<any>(url);
  }
}
