import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesService } from './Services/GetMovie/get-movie.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularLiquidProj';
  movies: any[];

    constructor(private moviesService: MoviesService) {  this.movies = [];}
    ngOnInit(): void {
     this.moviesService.getallMovies().subscribe(
     {
        next : (httpResponse: any)=>{
          console.log('data', httpResponse)
        },
        error : (err: any)=>{
          console.log('Error', err)
        },
        complete : ()=>{
          console.log('Completed!')
        }
}
     );
    }
  }

