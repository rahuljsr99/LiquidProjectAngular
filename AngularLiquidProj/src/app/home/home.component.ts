import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  getDate(): Date {
    return new Date('1999-04-19T00:00:00');
  }
 
  signup(): void {
    console.log('Signup button clicked');
    this.route.navigate(['signup']);
  }

}
