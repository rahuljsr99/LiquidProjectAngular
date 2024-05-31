import { Component } from '@angular/core';
import { AddUserService} from '../Services/AddUser_Service/add-user-service.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  isUserAdded: boolean = false;
  isSubmitting: boolean = false;
  isFormValid: boolean = true;  // Update this to check form validity dynamically if needed
  constructor( private addUserService: AddUserService){}
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
      UpdatedBy: 'add user functionality',
      UpdatedDate: new Date().toISOString()
    };

    console.log(userData);

    this.isFormValid = formData.checkValidity();
    if (!this.isFormValid) {
      return;
    }
    this.isSubmitting = true; // Start the adding process

    this.addUserService.postData('AddUser', userData)
      .subscribe(
        response => {
          // Handle successful response
          console.log('Response:', response);
          this.isUserAdded = true; // User is added
          this.isSubmitting = false; // Adding process is complete
        },
        error => {
          // Handle error
          console.error('Error:', error);
          this.isSubmitting = false; // Reset the button to allow retry
        }
      );
      
  }
  onFormChange(): void {
    if (this.isUserAdded) {
      this.isUserAdded = false;
    }
  }
  
 
}
