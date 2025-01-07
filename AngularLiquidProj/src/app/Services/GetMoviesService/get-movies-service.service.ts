import { Injectable } from '@angular/core';
import { HttpClient, HttpTransferCacheOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private http : HttpClient) { }
  private getAllMoviesApi = "https://localhost:44310/api/Movie/GetAllMoviesForGrid";

  getAllMovies() : Observable <any>{
    return this.http.get(this.getAllMoviesApi);
  }
}
