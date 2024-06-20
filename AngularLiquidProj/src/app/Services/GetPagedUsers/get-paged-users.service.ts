import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPagedUsers {
  private baseUrl = 'https://localhost:7177/api/Users' 

  constructor(private http: HttpClient) { }

  getPagedUsers(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetPagedUsers?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
