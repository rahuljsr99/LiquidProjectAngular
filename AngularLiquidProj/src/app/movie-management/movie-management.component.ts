import { Component } from '@angular/core';
import { MoviesService } from '../Services/GetMoviesService/movies.service';

import { ColDef, GridApi, GridReadyEvent, CellValueChangedEvent } from 'ag-grid-community';
@Component({
  selector: 'app-movie-management',
  templateUrl: './movie-management.component.html',
  styleUrl: './movie-management.component.scss'
})
export class MovieManagementComponent {


 movies: any[] = [];
  visibleUsers: any[] = [];
  editedUsers = new Set<number>();
  totalMovies: number | null = null;
  totalActiveMovies: number | null = null;
  totalInactiveMovies: number | null = null;
  topFiveHighestSellingMovies: string[] = [];
  leastFiveSellingMovies: string[] = [];
  totalRecords = 0;
  currentPage = 1;
  pageSize = 11;
  isLoading = false;

  gridApi!: GridApi;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMoviesForGrid();  
    this.loadMetrics();
  }

  loadMetrics() {
    this.isLoading = true;
    this.moviesService.getMoviesMetrics().subscribe({
      next: (metrics: any) => {
        this.totalMovies = metrics.totalMovies;
        this.totalActiveMovies = metrics.totalActiveMovies;
        this.totalInactiveMovies = metrics.totalInactiveMovies;
        this.topFiveHighestSellingMovies = metrics.topFiveHighestSellingMovies || [];
        this.leastFiveSellingMovies = metrics.leastFiveSellingMovies || [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading movie metrics:', error);
        this.isLoading = false;
      }
    });
  }

  getMoviesForGrid(): void {
  if (this.isLoading) return;
  this.isLoading = true;
  this.moviesService.getAllMovies().subscribe(
    (response) => {
      // Assuming response is an array of movies
      this.movies = Array.isArray(response) ? response : [response]; // Handle single object or array
      this.gridApi?.setRowData(this.movies); // Update grid with new data
      this.isLoading = false;
    },
    (error) => {
      console.error('Error fetching movies', error);
      this.isLoading = false;
    }
  );
}

 onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
  this.gridApi.setRowData(this.movies); // Set initial data (if any)
}
  hasSelected(): boolean {
    return this.gridApi?.getSelectedRows().length > 0;
  }

  bulkEdit() {
    const selected = this.gridApi.getSelectedRows();
    console.log('Bulk edit:', selected);
  }


 columnDefs: ColDef[] = [
  {
    headerName: '',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    width: 50
  },
  { field: 'movieID', headerName: 'Movie ID', width: 100, sortable: true },
  { field: 'title', headerName: 'Title', editable: true },
  { field: 'director', headerName: 'Director', editable: true },
  { field: 'actors', headerName: 'Actors', editable: true },
  { field: 'description', headerName: 'Description', editable: true },
  { field: 'genre', headerName: 'Genre', editable: true },
  {
    field: 'releaseDate',
    headerName: 'Release Date',
    valueFormatter: (params) => {
      if (!params.value) return '';
      const date = new Date(params.value);
      return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
  },
  { field: 'imdbRating', headerName: 'IMDB Rating', editable: true, width: 120 },
  { field: 'rottenTomatoesRating', headerName: 'RT Rating', editable: true, width: 120 },
  { field: 'price', headerName: 'Price', valueFormatter: (params) => params.value ? `$${params.value.toLocaleString()}` : '', editable: true }
];

  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true
  };


}
