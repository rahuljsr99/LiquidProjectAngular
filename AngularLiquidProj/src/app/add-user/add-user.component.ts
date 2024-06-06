import { Component, OnInit} from '@angular/core';
import { AddUserService} from '../Services/AddUser_Service/add-user-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Toast } from 'bootstrap';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent { 
  isUserAdded: boolean = false;
  isSubmitting: boolean = false;
  isFormValid: boolean = true;
  userForm: FormGroup;

  constructor(
    private addUserService: AddUserService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      UserName: [''],
      Password: [''],
      PhoneNumber: [''],
      Email: [''],
      userType: ['User'],
      IsActive: [true]
    });

    // Listen to form changes and debounce them
    this.userForm.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      if (this.isUserAdded) {
        this.isUserAdded = false;
        this.isSubmitting = false;
      }
    });
  }
  ngOnInit() {
    // Initialize the toast
    const toastEl = document.getElementById('liveToast');
    if (toastEl) {
      const toast = new Toast(toastEl, { autohide: true, delay: 5000 });
      (toastEl as any).bootstrapToast = toast;  // Store it for later use
    }
  }
  onSubmit(): void {
    const formData = this.userForm.value;
    const userData = {
      UserName: formData.UserName,
      Password: formData.Password,
      PhoneNumber: formData.PhoneNumber,
      Email: formData.Email,
      IsAdmin: formData.userType === 'Administrator',
      IsActive: formData.IsActive,
      CreatedBy: 'Admin',
      CreatedDate: new Date().toISOString(),
      UpdatedBy: 'add user functionality',
      UpdatedDate: new Date().toISOString()
    };

    this.isFormValid = this.userForm.valid;
    if (!this.isFormValid) {
      return;
    }

    this.isSubmitting = true;

    this.addUserService.postData('AddUser', userData).subscribe(
      response => {
        console.log('Response:', response);
        this.isUserAdded = true;
        this.isSubmitting = false;

        // Reset the form values
        this.userForm.reset({
          UserName: '',
          Password: '',
          PhoneNumber: '',
          Email: '',
          userType: 'User',
          IsActive: true
        });
        // Re-enable the button after 3 seconds
        setTimeout(() => {
          this.isUserAdded = false;
        }, 1500);
        // Show the toast message
        const toastEl = document.getElementById('liveToast');
        if (toastEl && (toastEl as any).bootstrapToast) {
          (toastEl as any).bootstrapToast.show();
        }
      },
      
      error => {
        console.error('Error:', error);
        this.isSubmitting = false;
      }
    );
  }

  onFormChange(): void {
    if (this.isUserAdded) {
      this.isUserAdded = false;
    }
  }
}