// movie-grid.component.ts
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/GetMoviesService/movies.service'

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
})
export class MovieGridComponent implements OnInit {
  movies: any[] = [];  // Array to store movie data

  constructor(private getMmovieService: MoviesService) {}

  ngOnInit(): void {

    this.getMmovieService.getAllMovies().subscribe((response:any) => {
      this.movies = response;  
    });
  }
}
