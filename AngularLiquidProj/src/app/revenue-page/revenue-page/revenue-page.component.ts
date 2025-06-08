import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { RevenueService } from '../../Services/TransactionalServices/GetTotalRevenue/revenue.service';

@Component({
  selector: 'app-revenue-page',
  templateUrl: './revenue-page.component.html',
  styleUrls: ['./revenue-page.component.scss']
})
export class RevenuePageComponent implements OnInit {
  selectedDateRange: string = 'last30days';
  totalRevenue: number = 0;
  movieRevenue: number = 0;
  tvShowRevenue: number = 0;
  totalSales: { total: number, movies: number, tvShows: number } = { total: 0, movies: 0, tvShows: 0 };
  pendingInvoices: number = 0;

  // NGX-Charts Configuration
  pieChartData: any[] = []; // Format: { name: string, value: number }[]
  view: [number, number] = [700, 400]; // Width, Height (px)
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#0d6efd', '#dc3545']
  };
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  constructor(private revenueService: RevenueService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.revenueService.GetTotalRevenue().subscribe(data => {
      this.totalRevenue = data.totalRevenueAmount;
      this.movieRevenue = data.totalRevenueFromMovies;
      this.tvShowRevenue = data.totalRevenueFromTVShows;
      this.updateChart();
    });
    this.revenueService.GetTotalSales().subscribe(data => {
      this.totalSales = data;
    });

    this.revenueService.GetPendingInvoices().subscribe(data => {
      this.pendingInvoices = data;
    });
  }

  updateChart(): void {
    this.pieChartData = [
      { name: 'Movies', value: this.movieRevenue },
      { name: 'TV Shows', value: this.tvShowRevenue }
    ];
  }

  filterData(): void {
    console.log('Filtering data for:', this.selectedDateRange);
    this.loadData();
  }

  viewMovieSales(): void { console.log('Viewing Movie Sales'); }
  viewTVShowSales(): void { console.log('Viewing TV Show Sales'); }
  viewAllSales(): void { console.log('Viewing All Sales'); }
  manageInvoices(): void { console.log('Managing Invoices'); }
  exportData(): void { console.log('Exporting Data'); }
}