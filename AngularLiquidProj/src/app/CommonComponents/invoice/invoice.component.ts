import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceContent: string='';
 
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("Invoice component initialized");
    console.log("invoice content: " + this.invoiceContent);
    this.route.queryParams.subscribe(params => {
      this.invoiceContent = params['content'];
    });
  }
}
