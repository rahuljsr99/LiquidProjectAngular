
import { Component,OnInit,NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/Auth_Service/auth.service';

  
@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent implements OnInit {
  Username = '';
  Password = '';
  errorMssg = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    console.log(this.Username);
    console.log(this.Password);
    this.errorMssg = 'Invalid Credentials';
    if (this.Username.trim().length === 0) {
      window.alert(this.errorMssg);
    } else if (this.Password.trim().length === 0) {
      window.alert(this.errorMssg);
    } else {
      this.errorMssg = '';
      this.auth.checkCredentials(this.Username, this.Password).subscribe(
        (response: any) => {
          if (response.success) {
            this.router.navigate(['home']);
          } else {
            //this.errorMssg = 'Invalid Credentials';
            window.alert(this.errorMssg); 
           
            
          }
        },
        (error: any) => {
          this.errorMssg = 'Invalid Credentials';
          window.alert(this.errorMssg); 
          //this.errorMssg = 'Invalid Credentials';
        }
      );
    }
  }

  signup(): void {
    console.log('Signup button clicked');
    this.router.navigate(['signup']);
  }
}