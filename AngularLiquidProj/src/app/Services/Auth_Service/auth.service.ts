import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl : string = "https://localhost:44310/api/Security/ValidateUserAsync";
  constructor(private http: HttpClient){}

  validateUser(email:string, password:string){
    return this.http.get(`${this.apiUrl}?email=${email}&password=${password}`);
  }
  
}
 
 