// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-movie-list',
//   templateUrl: './movie-list.component.html',
//   styleUrl: './movie-list.component.scss'
// })
// export class MovieListComponent {

// }

import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../Services/GetMovie/get-movie.service';

@Component({
     selector: 'app-movie-list',
     templateUrl: './movie-list.component.html',
     styleUrl: './movie-list.component.scss'
  })
export class  MovieListComponent implements OnInit {
  movies: any[];

    constructor(private moviesService: MoviesService) {  this.movies = [];}
   ngOnInit(): void {
     this.moviesService.getMovies().subscribe(movies => {
       this.movies = movies;
     });
  }
}
