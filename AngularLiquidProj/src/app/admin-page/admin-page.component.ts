import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/User_service/user.service';

// Define the User interface based on expected properties
interface User {
  userId: number;
  userName: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  users: User[] = [];
  userCount: number | null = null;
  filteredUsers: User[] = [];
  statusFilter: string = '';
  typeFilter: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Calling user service now');
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        this.userCount = this.users.length;
        this.filteredUsers = [...this.users]; // Initialize filteredUsers with all users
        console.log('Users fetched successfully. Total users:', this.users.length);
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.userCount = 0; // Set userCount to 0 in case of error
        this.filteredUsers = [];
      }
    );
  }

}