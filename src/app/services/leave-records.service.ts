import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRecord } from '../models/leave-record.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveRecordsService {
  private apiUrl = 'https://localhost:5001/api/leaverecords';

  constructor(private http: HttpClient) { }

  getLeaveRecords(): Observable<LeaveRecord[]> {
    return this.http.get<LeaveRecord[]>(this.apiUrl);
  }

  getLeaveRecord(id: number): Observable<LeaveRecord> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<LeaveRecord>(url);
  }

  addLeaveRecord(leaveRecord: LeaveRecord): Observable<LeaveRecord> {
    return this.http.post<LeaveRecord>(this.apiUrl, leaveRecord, httpOptions);
  }

  updateLeaveRecord(id: number, leaveRecord: LeaveRecord): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, leaveRecord, httpOptions);
  }

  deleteLeaveRecord(id: number): Observable<LeaveRecord> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<LeaveRecord>(url, httpOptions);
  }

  getFilteredLeaveRecords(params: any): Observable<LeaveRecord[]> {
    return this.http.get<LeaveRecord[]>(`${this.apiUrl}/filter`, { params: new HttpParams({ fromObject: params }) });
  }
}
