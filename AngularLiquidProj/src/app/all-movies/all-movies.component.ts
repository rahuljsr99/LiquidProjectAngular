import { Component, OnInit } from '@angular/core';
import { GetAllMoviesService } from '../Services/GetAllMovies/get-all-movies.service';
import { GetAllGenresService } from '../Services/GetAllGenres_Service/get-all-genres.service';
import { Movie } from '../Models/movie.model';
import { MovieGenre } from '../Models/movieGenre.model';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrl: './all-movies.component.scss'
})
export class AllMoviesComponent implements OnInit{
  movies: Movie[] =[];
  allMovies : Movie[] = [];
  movieCount: number=0;
  movie: Movie | null = null;

  movieGenre : MovieGenre | null = null;
  movieGenresList: MovieGenre[] = [];
constructor(private getAllMoviesService : GetAllMoviesService, private getAllGenreService: GetAllGenresService){}

ngOnInit(): void{
   this.getAllMovies();
   this.getAllMovieGenres();
}
getAllMovies(): void {
  this.getAllMoviesService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
  });
  console.log(this.movies);
}
getAllMovieGenres(){
  this.getAllGenreService.getAllMovieGenres().subscribe((movieGenre) => {
    this.movieGenresList = movieGenre;
  });
  console.log(this.movieGenresList);
}

mapCompleteMovieData():void{
    
}
}
