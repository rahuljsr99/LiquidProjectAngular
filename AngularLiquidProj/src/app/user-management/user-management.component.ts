
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User_service/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  users: any[] = [];
  userCount: number | null = null;
  adminCount: number | null = null;
  activeUsersCount: number | null = null;
  inactiveUsersCount: number | null = null;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    console.log('Calling user service now');
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        this.userCount = this.users.length;
        this.adminCount = this.users.filter(user => user.isAdmin).length;
        this.activeUsersCount = this.users.filter(user => user.isActive).length;
        this.inactiveUsersCount = this.users.filter(user => user.isActive==false).length;
        console.log(this.adminCount);
        console.log(this.activeUsersCount);
        console.log(this.inactiveUsersCount);
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
    
  }
  // Function to handle form submission
  /*onSubmit(formData: any): void {

    const userData = {
      UserName: formData.UserName.value,
      Password: formData.Password.value,
      PhoneNumber: formData.PhoneNumber.value,
      Email: formData.Email.value,
      IsAdmin: formData.userType.value === 'Administrator',
      IsActive: formData.IsActive.checked,
      CreatedBy: 'Admin', // You may need to change this based on your requirements
      CreatedDate: new Date().toISOString(), // You may need to change this based on your requirements
      UpdatedBy:  'add user functionality',
      UpdatedDate:  new Date().toISOString()
    };
    console.log(userData);
    // Assuming formData contains the data to be sent to the API
    this.addUserService.postData('AddUser', userData)
      .subscribe(
        response => {
          // Handle successful response
          console.log('Response:', response);
        },
        error => {
          // Handle error
          console.error('Error:', error);
        }
      );
  }*/

}
