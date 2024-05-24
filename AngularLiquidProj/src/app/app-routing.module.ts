import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { MovieListComponent } from './movie-list/movie-list.component';
import { AdminComponent } from './admin/admin.component';
=======
import { signupComponent } from './signup/signup.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { InvoiceComponent } from './CommonComponents/invoice/invoice.component';
import { MovieListComponent } from './movie-list/movie-list.component';
>>>>>>> 0184806239be1b350750ee425ac938979873b3de

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
 { path: 'home', component: HomeComponent }, // Define the route for the homepage
 { path: 'signup', component: signupComponent },
 { path: 'login', component: LoginComponent }, // Define the route for the loginpage
<<<<<<< HEAD

 //{ path: '**', component: LoginComponent }, 
 // Add other routes if needed
 { path: 'movie-list', component: MovieListComponent },
 { path: 'admin', component: AdminComponent},
 { path: 'login/admin', component: AdminComponent}
];
=======
 //{ path: '**', component: LoginComponent }, // Add other routes if needed
 { path: 'buy', component: BuyPageComponent },
 { path: 'invoice', component: InvoiceComponent },
>>>>>>> 0184806239be1b350750ee425ac938979873b3de

 //{ path: '**', component: LoginComponent }, 
 // Add other routes if needed
 { path: 'movie-list', component: MovieListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
