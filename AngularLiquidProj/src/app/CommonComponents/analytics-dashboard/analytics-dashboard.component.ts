import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CountUpOptions, CountUp } from 'countup.js';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent implements OnInit, OnDestroy {
  @Input() Item1: string = "";
  @Input() Item2: string = "";
  @Input() Item3: string = "";
  @Input() Item4: string = "";
  @Input() Count1: number = 0;
  @Input() Count2: number = 0;
  @Input() Count3: number = 0;
  @Input() Count4: number = 0;
  @Input() Button1: string = "";
  @Input() Button2: string = "";
  @Input() Button3: string = "";
  @Input() Button4: string = "";
  @Input() ButtonLink1: string = "";
  @Input() ButtonLink2: string = "";
  @Input() ButtonLink3: string = "";
  @Input() ButtonLink4: string = "";

  countUp1!: CountUp;
  countUp2!: CountUp;
  countUp3!: CountUp;
  countUp4!: CountUp;

  constructor() { }

  ngOnInit(): void {
    this.countUp1 = new CountUp('count1', this.Count1);
    this.countUp2 = new CountUp('count2', this.Count2);
    this.countUp3 = new CountUp('count3', this.Count3);
    this.countUp4 = new CountUp('count4', this.Count4);

    // Start counting up when component initializes
    this.startCountUp();
  }

  ngOnDestroy(): void {
    // Ensure to destroy the CountUp instances when component is destroyed
    this.countUp1?.reset();
    this.countUp2?.reset();
    this.countUp3?.reset();
    this.countUp4?.reset();
  }

  startCountUp(): void {
    this.countUp1.start();
    this.countUp2.start();
    this.countUp3.start();
    this.countUp4.start();
  }
}
