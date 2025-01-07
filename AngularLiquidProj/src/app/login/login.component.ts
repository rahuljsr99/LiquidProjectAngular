import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth_Service/auth.service';
import { AuthenticationService } from '../Services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Email = '';  // User's email
  Password = '';  // User's password
  errorMsg = '';  // Error message
  isAdmin = false;  // Toggle for Admin / User switch
  role = '';  // User's role after login (e.g., 'Admin', 'User')

  constructor(
    private auth: AuthService,
    private router: Router,
    private authentication: AuthenticationService
  ) {}

  ngOnInit(): void {}

  // Login method
  login() {
    // Clear previous error message
    this.errorMsg = '';

    // Validation for email and password
    if (this.Email.trim().length === 0) {
      this.errorMsg = 'Email is required';
      return;
    }

    if (this.Password.trim().length === 0) {
      this.errorMsg = 'Password is required';
      return;
    }

    // Call AuthService to validate user credentials
    this.auth.validateUser(this.Email, this.Password).subscribe(
      (response: any) => {
        console.log('Login Response:', response);  // Debugging response

        // Check if the response indicates successful authentication
        if (response.statusCode === 200 && response.isUserAuthenticated) {
          // Set role from the response
          this.role = response.role;
  
          // Case 1: If the switch is ON (isAdmin = true) and the role is Admin, navigate to Admin page
          if (this.isAdmin && this.role === 'Admin') {
            this.router.navigate(['admin']);  // Redirect to Admin page
          }
          // Case 2: If the switch is OFF (isAdmin = false) and the role is Admin, navigate to Home
          else if (!this.isAdmin && this.role === 'Admin') {
            this.router.navigate(['home']);  // Redirect to Home page for Admin
          }
          // Case 3: If the switch is OFF (isAdmin = false) and the role is User, navigate to Home
          else if (!this.isAdmin && this.role === 'User') {
            this.router.navigate(['home']);  // Redirect to Home page for User
          }
          // Case 4: If the switch is ON (isAdmin = true) but the role is not Admin, show error
          else if (this.isAdmin && this.role !== 'Admin') {
            this.errorMsg = 'You do not have Admin privileges';
          }
          // If no role matches or if there is an unexpected situation, show error
          else {
            this.errorMsg = 'Invalid credentials or unauthorized access';
          }
        } else {
          this.errorMsg = 'Invalid credentials';
        }
      },
      (error) => {
        console.log('Error:', error);
        this.errorMsg = 'An error occurred. Please try again later.';
      }
    );
  }

  // Signup method
  signup(): void {
    console.log('Signup button clicked');
    this.router.navigate(['signup']);
  }
}
