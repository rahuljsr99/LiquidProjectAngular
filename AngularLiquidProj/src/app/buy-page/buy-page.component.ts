import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from './../Services/InvoiceService/invoice.service';
import movieDb from './../../assets/JsonDb/MovieDb/sampleMovieDb.json';

interface InvoiceResponse {
  message: string; // Response message such as "Invoice Saved, Invoice Number: 123"
  invoiceNumber: number; // Invoice number returned from backend
}

interface Invoice {
  InvoiceNumber: string;
  Amount: number;
  MovieName: string;
  DirectorName: string;
  TransactionNumber: string;
}

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss']
})
export class BuyPageComponent implements OnInit {
  movies: { title: string; director: string; price: number }[] = movieDb;
  selectedMovie: any = {};
  isItemBought: boolean = false;
  isBuying: boolean = false;
  showSpinner: boolean = false;
  transactionId: string = '';
  invoiceNumber: number = 0;
  upiId: string = 'rahulkumar.jsr130299@okhdfcbank';
  upiQrCodeUrl: string = '';


  constructor(
    private router: ActivatedRoute,
    private router2: Router,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.selectedMovie = {
        title: params['title'],
        director: params['director'],
        price: params['price'],
        imdbRating: params['imdbRating'],
        description: params['description'],
        genre: params['genre'],
        releaseDate: params['releaseDate']
      };
    });
    this.upiQrCodeUrl = this.generateUpiQrCode(this.upiId, this.selectedMovie.title, this.selectedMovie.price);

  }

  generateUpiQrCode(upiId: string, note: string, amount: number): string {
  const upiUrl = `upi://pay?pa=${upiId}&pn=MoviePurchase&tn=${note}&am=${amount}&cu=INR`;
  return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiUrl)}&size=150x150`;
}

  buyItem() {
    if (!this.selectedMovie.title) {
      console.log('Please select a movie before buying.');
      return;
    } else if (this.isItemBought || this.isBuying) {
      console.log('Item is already bought or is in the buying process.');
      return;
    } else {
      this.isBuying = true; // Start the buying process
      this.showSpinner = true; // Show the spinner

      // Simulate async process of buying
      setTimeout(() => {
        this.isItemBought = true; // Item is bought
        this.isBuying = false; // Buying process is complete
        this.showSpinner = false; // Hide the spinner

        // Generate invoice after purchase
        this.generateInvoice();
      }, 2000); // Simulate a 2-second buying process
    }
  }

  generateInvoice() {
    const invoiceData: any = {
      MovieName: this.selectedMovie.title,
      DirectorName: this.selectedMovie.director,
      Amount: this.selectedMovie.price,
      ItemType: 'Movie',
      TransactionNumber: this.generateTransactionNumber(),
    };

    // Call the SaveInvoice service to save the invoice data
    this.invoiceService.SaveInvoice(invoiceData).subscribe(
      (response: any) => {
        console.log('Invoice saved successfully', response);
        this.invoiceNumber = response.invoiceNumber; // Save the invoice number from the response
      },
      (error) => {
        console.error('Error saving invoice', error);
      }
    );
  }

  printInvoice() {
    if (this.invoiceNumber === 0) {
      console.log('Invoice is not generated yet.');
      return;
    }
    
    // Convert the Observable to a Promise and handle it with async/await
    this.invoiceService.GetInvoice(this.invoiceNumber).toPromise()
      .then((response) => {
        if (!response) {
          console.error('No response received from the API.');
          return;
        }
        
        console.log('Invoice fetched successfully', response);
  
        const invoiceDatafromDB = {
          invoiceNumber: response.invoiceNumber,
          movieTitle: response.movieName,
          director: response.directorName,
          price: response.amount,
          transactionId: response.transactionNumber,
          createdOn: response.createdOn
        };
  
        console.log('Invoice from db', invoiceDatafromDB);
  
        // Navigate after processing the invoice
        this.router2.navigate(['/invoice'], { queryParams: { ...invoiceDatafromDB } });
      })
      .catch((error) => {
        console.error('Error fetching invoice', error);
      });
  }
  
  

  generateTransactionNumber(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 12; // Limit to 12 characters
    let transactionId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      transactionId += characters.charAt(randomIndex);
    }
    return transactionId;
  }

  getDirectorOfSelectedMovie(): string {
    return this.selectedMovie ? this.selectedMovie.director : '';
  }

  getPriceOfSelectedMovie(): number {
    return this.selectedMovie ? this.selectedMovie.price : 0;
  }
}
