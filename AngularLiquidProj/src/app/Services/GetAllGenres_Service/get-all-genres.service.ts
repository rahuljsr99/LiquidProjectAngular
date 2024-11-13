import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllGenresService {

  constructor(private http : HttpClient) { }

  getAllGenres(): Observable<any>{
    return this.http.get("https://localhost:44310/api/Genre/GetAllGenres")
  }

  getAllMovieGenres(): Observable<any>{
    return this.http.get("https://localhost:44310/api/Genre/GetAllMovieGenres")
  }
  }

