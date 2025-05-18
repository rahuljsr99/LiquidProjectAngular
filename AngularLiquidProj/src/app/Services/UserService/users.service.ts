import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private GetPagedUsers = 'https://localhost:44310/api/Users/GetPagedUsers'; // Updated URL to match API route
  private GetSoulCounts = 'https://localhost:44310/api/Users/GetSoulCounts'
  constructor(private http: HttpClient) { }

  getPagedUsers(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.GetPagedUsers}?pageNumber=${pageNumber}&pageSize=${pageSize}`); // Correct query parameters
  }

  getSoulCounts(): Observable<any> {
  return this.http.get(this.GetSoulCounts);
}

  updateUser(payload: any): Observable<any> {
  return this.http.patch('https://localhost:44310/api/Users/UpdateUserPartial', payload);
}


}
