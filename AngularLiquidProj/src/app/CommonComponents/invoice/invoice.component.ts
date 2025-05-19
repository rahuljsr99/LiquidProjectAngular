import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  movieTitle: string = '';
  director: string = '';
  price: number = 0;
  transactionId: string = '';
  date: string = '';
  invoiceNumber: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.movieTitle = params['movieTitle'];
      this.director = params['director'];
      this.price = parseFloat(params['price']);
      this.transactionId = params['transactionId'];
      this.date = params['createdOn'];
      this.invoiceNumber = params['invoiceNumber'];
    });
  }

  generatePDF() {
    const element = document.getElementById('print-section');
    const opt = {
      margin: 0.5,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    if (element) {
      html2pdf().set(opt).from(element).save();
    }
  }
}
