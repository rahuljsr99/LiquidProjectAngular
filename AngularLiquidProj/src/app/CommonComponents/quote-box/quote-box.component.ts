import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrl: './quote-box.component.scss'
})
export class QuoteBoxComponent {
@Input() QuoteText:string = '';
@Input() CreditText:string = '';
@Input() QuotedBy:string = '';
}
