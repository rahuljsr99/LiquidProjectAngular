import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(private http: HttpClient) { }

  GetTotalRevenue(): Observable<any> {
   // return of(10000); // Mocked response
     return this.http.get<number>("https://localhost:44310/api/Transactional/GetTotalRevenue");
  }

  GetTotalSales(): Observable<{ total: number, movies: number, tvShows: number }> {
    return of({ total: 250, movies: 150, tvShows: 100 }); // Mocked response
    // Add actual API call
  }

  GetPendingInvoices(): Observable<number> {
    return of(20); // Mocked response
    // Add actual API call
  }
}