import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http : HttpClient) 
  { }
  private apiUrl = 'https://restcountries.com/v3.1/all';

  getCountries(): Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
