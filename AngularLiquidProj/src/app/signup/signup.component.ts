import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddUserService } from '../Services/AddUser_Service/add-user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class signupComponent {
    
    isUserAdded: boolean = false;
    isSubmitting: boolean = false;
    isFormValid: boolean = true;
    SignUpForm: FormGroup;
    errorMssg = '';
   
  
    constructor(private router: Router, private SignupService: AddUserService , private fb: FormBuilder) {
    
      this.SignUpForm = this.fb.group({
        UserName: [''],
        Password: [''],
        PhoneNumber: [''],
        Email: ['']
        
      });
    }

    

    signup(): void {
      
     
      console.log(this.SignUpForm);
      console.log(this.SignUpForm.value);
      const formData = this.SignUpForm.value;
      console.log(formData);
      const userData = {
        Username: formData.UserName,
        Password: formData.Password,
        PhoneNumber: formData.PhoneNumber,
        Email: formData.Email,
        IsAdmin: false,
        //formData.userType === 'Administrator',
        IsActive: true,
        //formData.IsActive,
        CreatedBy: 'Admin',
        CreatedDate: new Date().toISOString(),
        UpdatedBy: null,
        UpdatedDate: null
      };
  
      
      this.isFormValid = this.SignUpForm.valid;
    if (!this.isFormValid) {
      this.showValidationErrors();
      return;
    }
  
      this.isSubmitting = true;
  
      this.SignupService.postData('AddUser', userData).subscribe(
        response => {
          console.log('Response:', response);
          this.isUserAdded = true;
          this.isSubmitting = false;
          
  
          // Reset the form values
          this.SignUpForm.reset({
            username: '',
            Password: '',
            MobileNumber: '',
            emailID: ''
            
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
          this.router.navigate(['home']);
        },
        
        error => {
          console.error('Error:', error);
          this.isSubmitting = false;
          this.errorMssg = 'Invalid Credentials'
          window.alert(this.errorMssg);
        }
      );
    }
    showValidationErrors(): void {
      const formErrors = [];
      if (this.SignUpForm.get('UserName')?.errors) {
        formErrors.push('Username is required');
      }
      if (this.SignUpForm.get('Password')?.errors) {
        formErrors.push('Password is required');
      }
      if (this.SignUpForm.get('PhoneNumber')?.errors) {
        formErrors.push('Phone number is required');
      }
      if (this.SignUpForm.get('Email')?.errors) {
        if (this.SignUpForm.get('Email')?.errors?.['required']) {
          formErrors.push('Email is required');
        }
        if (this.SignUpForm.get('Email')?.errors?.['email']) {
          formErrors.push('Email is invalid');
        }
      }
      window.alert(formErrors.join('\n'));
    }
  
    onFormChange(): void {
      if (this.isUserAdded) {
        this.isUserAdded = false;
      }
    }
  }
  
    

  