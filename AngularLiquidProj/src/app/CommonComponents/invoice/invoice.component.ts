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
  movieTitle:string ='';
  director:string ='';
  price:string ='';
  transactionId:string ='';
  date:Date= new Date();
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("Invoice component initialized");
    
    this.route.queryParams.subscribe(params => {
       this.movieTitle = params['movieTitle'];
       this.director = params['director'];
       this.price = params['price'];
       this.transactionId = params['transactionId'];
       this.date = params['date'];
      
    });
  }
    generatePDF() {
      const doc = new jsPDF();
      doc.setFont('Arial'); // Set the font to Helvetica (or any other font that supports the rupee symbol)
      doc.setFontSize(12); // Set the font size
      doc.text('Movie Purchase Invoice', 10, 10);
    
      // Add table content
      const data = [
        ['Movie Title', this.movieTitle],
        ['Directed by', this.director],
        ['Price', 'Rs.' + this.price],
        ['Transaction ID', this.transactionId],
        ['Date', this.date]
      ];
    
      (doc as any).autoTable({
        head: [['Attribute', 'Value']],
        body: data
      });
    
      // Save or open the PDF
      doc.save('invoice.pdf');
    }
    
    
  }

