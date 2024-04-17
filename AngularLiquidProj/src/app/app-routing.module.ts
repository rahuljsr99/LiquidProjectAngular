import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 // { path: '', component: HomeComponent }, // Define the route for the homepage
 { path: '', component: LoginComponent }, // Define the route for the homepage
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
