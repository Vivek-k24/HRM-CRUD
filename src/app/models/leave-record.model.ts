export interface LeavePeriod {
  start: string;
  end: string;
}

export interface LeaveRecord {
  leaveType: string;
  entitlements: number;
  pendingApproval: number;
  scheduled: number;
  taken: number;
  balance: number;
  leavePeriod: LeavePeriod;
}

export interface EmployeeData {
  employee: string;
  location: string;
  subUnit: string;
  jobTitle: string;
  leaveRecords: LeaveRecord[];
}

export interface EmployeeDataResponse {
  'employee-data': EmployeeData[];
}
