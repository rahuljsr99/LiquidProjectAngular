import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPagedUsers {
  private baseUrl = 'https://localhost:44310/api/Users/GetPagedUsers'; // Updated URL to match API route

  constructor(private http: HttpClient) { }

  getPagedUsers(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`); // Correct query parameters
  }
}
