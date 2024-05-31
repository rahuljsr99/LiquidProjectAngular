import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrl: './analytics-dashboard.component.scss'
})
export class AnalyticsDashboardComponent {
@Input() Item1 : string = "";
@Input() Item2 : string = "";
@Input() Item3 : string = "";
@Input() Item4 : string = "";
@Input() Count1 : number =  0;
@Input() Count2 : number =  0;
@Input() Count3 : number =  0;
@Input() Count4 : number =  0;
@Input() Button1 : string = "";
@Input() Button2 : string = "";
@Input() Button3 : string = "";
@Input() Button4 : string = "";
@Input() ButtonLink1 : string = "";
@Input() ButtonLink2 : string = "";
@Input() ButtonLink3 : string = "";
@Input() ButtonLink4 : string = "";
}
