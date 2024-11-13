import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:44310/api/Users/GetAllUsers';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getUserCounts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetUserCounts`);
  }
}
