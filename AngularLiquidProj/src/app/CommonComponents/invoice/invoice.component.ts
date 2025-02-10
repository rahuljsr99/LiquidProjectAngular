import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  movieTitle: string = '';
  director: string = '';
  price: number = 0; // Changed price type to number for calculation
  transactionId: string = '';
  date: string = ''; 
  invoiceNumber: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("Invoice component initialized");

    this.route.queryParams.subscribe(params => { console.log(params['date'])});

    this.route.queryParams.subscribe(params => {
      this.movieTitle = params['movieTitle'];
      this.director = params['director'];
      this.price = parseFloat(params['price']); 
      this.transactionId = params['transactionId'];
      this.date = params['createdOn'];
      this.invoiceNumber = params['invoiceNumber'];
    });
    console.log( this.movieTitle, this.date );
  }


  // Function to generate the PDF
  generatePDF() {
    const doc = new jsPDF();
    doc.setFont('Arial'); // Set the font to Arial
    doc.setFontSize(12); // Set the font size
    doc.text('Movie Purchase Invoice', 10, 10);

    // Add table content
    const data = [
      ['Movie Title', this.movieTitle],
      ['Directed by', this.director],
      ['Price', 'Rs.' + this.price.toFixed(2)], // Display price with 2 decimal places
      ['Transaction ID', this.transactionId],
      ['Date', this.date], 
      ['Invoice Number', this.invoiceNumber],
    ];

    (doc as any).autoTable({
      head: [['Attribute', 'Value']],
      body: data
    });

    // Save or open the PDF
    doc.save('invoice.pdf');
  }
}
