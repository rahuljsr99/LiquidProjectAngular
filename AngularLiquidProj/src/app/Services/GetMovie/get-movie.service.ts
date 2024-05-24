import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> 0184806239be1b350750ee425ac938979873b3de

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class GetMovieService {

  constructor() { }
}
=======
export class MoviesService {

  constructor(private http: HttpClient) { }

   getMovies(): Observable<any[]> {
     return this.http.get<any[]>('assets/movieList.json');
   }
}
//'https://jsonplaceholder.typicode.com/users'
>>>>>>> 0184806239be1b350750ee425ac938979873b3de
