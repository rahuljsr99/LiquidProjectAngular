import { Component, ElementRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import movieDb from './../../assets/JsonDb/MovieDb/sampleMovieDb.json';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrl: './buy-page.component.scss'
})
export class BuyPageComponent {
// Reference to the invoice content element
constructor(private router: Router){}
  movies: { title: string; director: string; price: number }[] =movieDb; 
  selectedMovie: string = '';
  isItemBought: boolean = false;
  isBuying: boolean = false;
  showSpinner: boolean = false;
  transactionId: string = '';  
  invoiceContent: string = '';
  
 
  buyItem() {
    this.isBuying = true; // Start the buying process
    this.showSpinner = true; // Show the spinner

    setTimeout(() => {
      // Simulate a delay (replace this with your actual logic)
      // Once the buying process is complete, update the button state
      this.isItemBought = true; // Item is bought
      this.isBuying = false; // Buying process is complete
      this.showSpinner = false; // Hide the spinner
    }, 2000); // Simulate a 2-second buying process
  }
  printInvoice() {
    const invoiceContent = this.generateInvoiceContent();
    this.router.navigate(['/invoice'], { queryParams: { content: invoiceContent } });
  }
  generateInvoiceContent(): string {
    // Generate the invoice content dynamically based on the selected movie, price, etc.
    return `
      <h1>Movie Purchase Invoice</h1>
      <div>
        <h2>${this.selectedMovie}</h2>
        <p>Directed by: ${this.getDirectorOfSelectedMovie()}</p>
        <p>Price: ${this.getPriceOfSelectedMovie()}$</p>
        <p>Random Tax: ${Math.floor(Math.random() * 10)}%</p>
        <p>Transaction ID: ${this.transactionId}</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
      </div>
    `;
  }
  resetBuyButton() {
    this.isItemBought = false;
  }
  getDirectorOfSelectedMovie():string{
    const selectedMovieObj = this.movies.find(movie => movie.title === this.selectedMovie);
    return selectedMovieObj ? selectedMovieObj.director : "";
  }
  getPriceOfSelectedMovie(): number {
    const selectedMovieObj = this.movies.find(movie => movie.title === this.selectedMovie);
    return selectedMovieObj ? selectedMovieObj.price : 0;
  }
}
