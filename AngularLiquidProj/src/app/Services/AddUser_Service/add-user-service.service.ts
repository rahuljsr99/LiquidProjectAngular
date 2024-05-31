import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private apiUrl = 'https://localhost:7177/api/Users'; // Your API base URL

  constructor(private http: HttpClient) {}

  // Function to handle errors
  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
  }

  // Function to send POST request to API
  postData(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, data, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }
}
