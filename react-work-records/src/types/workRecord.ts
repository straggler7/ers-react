export interface WorkRecord {
  id: string;
  dln: string;
  serviceCenter: string;
  formType: string;
  returnType: string;
  taxPeriod: string;
  errors: string;
  status: WorkRecordStatus;
  assignedTo: string;
  controlDay: string;
  updatedDate: string;
}

export type WorkRecordStatus = 'New' | 'Assigned' | 'QR Review' | 'Suspended';

export interface WorkRecordError {
  code: string;
  description: string;
  status: 'Active' | 'Updated' | 'Review';
}

export interface WorkRecordDetails extends WorkRecord {
  taxpayerName: string;
  ssn: string;
  priority: 'High' | 'Medium' | 'Low';
  receivedDate: string;
  errorDetails: WorkRecordError[];
  form4868Data?: Form4868Data;
}

export interface Form4868Data {
  taxpayerName: string;
  ssn: string;
  spouseName?: string;
  spouseSSN?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  filingStatus: string;
  estimatedTotalTax: string;
  totalPayments: string;
  balanceDue: string;
  extensionPayment: string;
  checkNumber?: string;
  bankRoutingNumber?: string;
  bankAccountNumber?: string;
  electronicWithdrawalDate?: string;
}

export interface FilterOptions {
  searchAll?: string;
  assignedTo?: string;
  status?: WorkRecordStatus | '';
}

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export interface SortingState {
  id: string;
  desc: boolean;
}[]
