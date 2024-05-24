import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
 { path: 'home', component: HomeComponent }, // Define the route for the homepage
 { path: 'login', component: LoginComponent }, // Define the route for the loginpage

 //{ path: '**', component: LoginComponent }, 
 // Add other routes if needed
 { path: 'movie-list', component: MovieListComponent },
 { path: 'admin', component: AdminComponent},
 { path: 'login/admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
