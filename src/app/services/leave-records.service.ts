import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LeaveRecord } from '../models/leave-record.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveRecordsService {
  private apiUrl = 'https://localhost:5001/api/leaverecords';

  constructor(private http: HttpClient) {}

  getFilteredLeaveRecords(filters: any): Observable<LeaveRecord[]> {
    let params = new HttpParams();
    Object.keys(filters).forEach(key => {
      if (filters[key] !== null && filters[key] !== undefined && filters[key] !== '') {
        params = params.set(key, filters[key]);
      }
    });

    return this.http.get<LeaveRecord[]>(`${this.apiUrl}/filter`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }

  getTest(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/test/test`).pipe(
      catchError(this.handleError)
    );
  }
}
