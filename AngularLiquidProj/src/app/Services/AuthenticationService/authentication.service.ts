import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://localhost:44310/api/Security/GetToken';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const payload = {
      Username: username,
      Password: password
    };

    return this.http.post<any>(this.apiUrl, payload);
  }

  storeToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
