import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/GetMoviesService/movies.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
})
export class MovieGridComponent implements OnInit {
  movies: any[] = [];  // Array to store movie data
  filteredMovies: any[] = [];  // Array to store filtered movie data
  searchTerm: string = "";  // Store the search term
  originalMovies: any[] = [];  // Store the original movie data
  displayAllMovies: boolean = true;
  displaySearchedMovies : boolean = false;
  constructor(private getMovieService: MoviesService) {}

  ngOnInit(): void {
    this.getMovieService.searchAndGetMovies(this.searchTerm).subscribe((response: any) => {
      this.movies = response;
      this.originalMovies = [...response];  // Keep a copy of the original data
    });
  }

  // Function to handle search input
  onSearch(event: Event): void {
    this.displayAllMovies = false;
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement.value.toLowerCase();
    this.getMovieService.searchAndGetMovies(this.searchTerm.toLowerCase()).subscribe((response: any) => {
    this.filteredMovies = response;
    console.log("filtered Movies ->", this.filteredMovies)
      if(this.filteredMovies != null){
        this.showSearchedMovies();
      }
      else{
        this.displayAllMovies = true;
      }
    });
  }
  showSearchedMovies(){
    this.displaySearchedMovies = true;
  }
 
}