import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User_service/user.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit  {
  users: any[] = [];
  userCount: number | null = null; 
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    console.log('Calling user service now');
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        this.userCount = this.users.length;
        console.log(this.users.length);
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
    
  }
  // Function to handle form submission
  

}
