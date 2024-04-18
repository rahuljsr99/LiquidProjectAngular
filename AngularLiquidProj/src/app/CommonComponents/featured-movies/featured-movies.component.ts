import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrl: './featured-movies.component.scss'
})
export class FeaturedMoviesComponent {
@Input() Title:string = '';
@Input() CardTitle:string = '';
@Input() ShortSummary:string = '';
@Input() Rating:string = '';
}
