import { Component, OnInit } from '@angular/core';
import { AddUserService} from '../Services/AddUser_Service/add-user-service.service'
import { UserService } from '../Services/User_service/user.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  users: any[] = [];
  userCount: number = 0;
  constructor(private userService: UserService, private addUserService: AddUserService) {}
  ngOnInit(): void {
    console.log('Calling user service now');
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        this.userCount = this.users.length;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
    
  }
  // Function to handle form submission
  onSubmit(formData: any): void {

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
  }

}
