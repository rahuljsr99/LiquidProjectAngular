import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }

   getallMovies() {
     return this.http.get('https://localhost:7177/api/movies/GetAllMovies')
   }
   
}
//'https://jsonplaceholder.typicode.com/users'