import { Injectable } from '@angular/core';
import { HttpClient, HttpTransferCacheOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }
  private getAllMoviesApi = "https://localhost:44310/api/Movie/GetAllMoviesForGrid";
  private getMoviesMetricsApi = "https://localhost:44310/api/Movie/GetMovieMetrics";
  private searchAndGetMoviesApi = "https://localhost:44310/api/Movie/SearchAndGetMovies";
  getAllMovies() : Observable <any>{
    return this.http.get(this.getAllMoviesApi);
  }
  getMoviesMetrics(): Observable<any>{
    return this.http.get(this.getMoviesMetricsApi);
  }
  searchAndGetMovies(term:string): Observable<any>{
    return this.http.get(`${this.searchAndGetMoviesApi}?term=${term}`);
  }
}
