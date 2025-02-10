import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Define the interface for the API response
interface InvoiceResponse {
  message: string;  // The message will contain the response, e.g., "Invoice Saved, Invoice Number: 123"
}

interface Invoice {
  invoiceNumber: string;
  amount : number;
  movieName : string;
  transactionNumber: string;
  directorName : string; 
  createdOn : string; 
  createdBy : string; // This will contain the response message, such as "Invoice Saved, Invoice Number: 123"
}
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  // Correct the URL for the SaveInvoice API
  private saveInvoiceAPI = "https://localhost:44310/api/Transactional/SaveInvoice";  // Assuming this is the correct endpoint

  // Error handler
  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
  }

  GetInvoice(invoiceNumber: number): Observable<Invoice> {
    const apiUrl = "https://localhost:44310/api/Transactional/GetInvoice";
    
    // Add the invoiceNumber as a query parameter
    const params = new HttpParams().set('invoiceNumber', invoiceNumber.toString());

    return this.http.get<Invoice>(apiUrl, { params });
  }
  // Save invoice method with explicit Observable type
  SaveInvoice(invoice: any): Observable<InvoiceResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<InvoiceResponse>(this.saveInvoiceAPI, invoice, { headers })
      .pipe(
        catchError((error) => this.handleError(error))  // Explicitly using the typed error handler
      );
  }
}
