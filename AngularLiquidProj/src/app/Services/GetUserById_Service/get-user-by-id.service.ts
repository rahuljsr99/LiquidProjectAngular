import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUserByIdService {

  private apiUrl = 'https://localhost:7177/api/Users/GetUserById'
  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?id=${id}`).pipe(
      catchError(this.handleError)
    );
  }
  

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Handle the error here
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
