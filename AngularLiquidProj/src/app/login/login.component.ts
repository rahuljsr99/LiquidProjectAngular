
import { Component,OnInit,NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/Auth_Service/auth.service';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
    constructor(private auth: AuthService , private Router: Router, private route:Router){}
    Username ='';
    Password='';
    errorMssg='';
 
    ngOnInit(): void {
  }
 
login(){
  if(this.Username.trim().length===0){
    this.errorMssg='Username is required';
  }
 
  else if(this.Password.trim().length===0){
    this.errorMssg='Password is required'
  }
 
  else{
    this.errorMssg="";
 
    let res =this.auth.checkCredentials(this.Username, this.Password);
    if(res===200){
      this.Router.navigate(['home']);
    }
    if(res===404){
        this.errorMssg='Invalid Credentials';
    }
  }
}

signup(): void {
  console.log('Signup button clicked');
  this.route.navigate(['signup']);
}
 
}