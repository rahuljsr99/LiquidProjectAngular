import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../Models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class GetAllMoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>("https://localhost:44310/api/Movie/GetAllMovies");
  }
}
