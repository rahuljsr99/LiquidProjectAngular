import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: any;  // Input property to receive movie data

  constructor(private router : Router){}
  buyMovie(movie: any): void {
    console.log("Selected Movie Title:", movie.title);

    // Use Angular Router to navigate and pass the movie as query parameters
    this.router.navigate(['/buy'], {
      queryParams: {
        title: movie.title,
        director: movie.director,
        price: movie.price,
        imdbRating: movie.imdbRating,
        description: movie.description,
        genre: movie.genre,
        releaseDate: movie.releaseDate,
      }
    });
  }
}
