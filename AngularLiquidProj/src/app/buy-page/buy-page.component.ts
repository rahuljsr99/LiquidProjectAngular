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
    //const invoiceContent = this.generateInvoiceContent();
    this.router.navigate(['/invoice'], { queryParams: { 
      movieTitle:this.selectedMovie, 
      director:this.getDirectorOfSelectedMovie(),
       price:this.getPriceOfSelectedMovie(),
       transactionId:this.generateTransactionId(),
        date:new Date().toLocaleDateString() } 
      });
  }
  // generateInvoiceContent(): string {
  //   // Generate the invoice content dynamically based on the selected movie, price, etc.
  //   return `
    // <h1>Movie Purchase Invoice</h1>
    // <table class="table">
    //   <thead class="table-dark">
    //     <tr>
    //       <th scope="col">Attribute</th>
    //       <th scope="col">Value</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row" class="table-secondary">Movie Title</th>
    //       <td>${this.selectedMovie}</td>
    //     </tr>
    //     <tr>
    //       <th scope="row" class="table-secondary">Directed by</th>
    //       <td>${this.getDirectorOfSelectedMovie()}</td>
    //     </tr>
    //     <tr>
    //       <th scope="row" class="table-secondary">Price</th>
    //       <td>&#8377; ${this.getPriceOfSelectedMovie()}</td>
    //     </tr>
    //     <tr>
    //       <th scope="row" class="table-secondary">Transaction ID</th>
    //       <td>${this.generateTransactionId()}</td>
    //     </tr>
    //     <tr>
    //       <th scope="row" class="table-secondary">Date</th>
    //       <td>${new Date().toLocaleDateString()}</td>
    //     </tr>
    //   </tbody>
    // </table> 
  //   `;
  // }
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
  generateTransactionId(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 12; // Limit to 12 characters
    let transactionId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      transactionId += characters.charAt(randomIndex);
    }
    return transactionId;
  }
}
