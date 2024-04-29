import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class signupComponent {
    formData: any = {};
    Username = ''
    Password = ''
    emailID = ''
    errorMsg = ''
    MobileNumber = ''
   
  
    constructor(private router: Router) {
    }
  
    signup(): void {
      if (this.Username.trim().length === 0 ){
        this.errorMsg = 'Username required';
      } else if (this.Password.trim().length === 0 ) {
        this.errorMsg = 'Password required';
      } else if (this.emailID.trim().length === 0 ) {
        this.errorMsg = 'Email required';
      } else if (this.MobileNumber.trim().length === 0 ) {
        this.errorMsg = 'Mobile Number required';
      }
      else {
        this.errorMsg = '';
        this.router.navigate(['home']);
      }
      
    }
  }