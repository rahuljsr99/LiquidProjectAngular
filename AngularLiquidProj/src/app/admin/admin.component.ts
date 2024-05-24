import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/Auth_Service/auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
    constructor(private auth: AdminService , private Router: Router){}
    Username ='';
    Password='';
    errorMssg='';
 
    ngOnInit(): void {
  }
 
admin(){
  if(this.Username.trim().length===0){
    this.errorMssg='Username is required';
  }
 
  else if(this.Password.trim().length===0){
    this.errorMssg='Password is required'
  }
 
  else{
    this.errorMssg="";
 
    let res =this.auth.admin(this.Username, this.Password);
    if(res===200){
      this.Router.navigate(['home']);
    }
    if(res===404){
        this.errorMssg='Invalid Credentials';
    }
  }
}
 
}