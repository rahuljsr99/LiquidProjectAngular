import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';import movieDb from './../../assets/JsonDb/MovieDb/sampleMovieDb.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('invoice') invoiceElement!: ElementRef;
    movies: { title: string; director: string; }[] = movieDb;
  
    constructor() { }
    ngOnInit(): void {
    console.log(this.movies);
    }
    
  }

