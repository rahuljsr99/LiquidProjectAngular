import { Component, OnInit} from '@angular/core';
import { AddUserService} from '../Services/AddUser_Service/add-user-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Toast } from 'bootstrap';
import { CountryService} from '../Services/Countries_Service/country.service'


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
  countries: any[] = [];

  constructor(
    private addUserService: AddUserService,
    private countryService : CountryService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      UserName: [''],
      Password: [''],
      PhoneNumber: [''],
      Email: [''],
      userType: ['User'],
      IsActive: [true],
      Nationality: ['', Validators.required],
      BirthDate : [''],
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
    //Initialize external api for country service
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data.map((country) => ({
        name: country.name.common,  // Name of the country
        code: country.cca2         // ISO code of the country
      }));
    });


    // Initialize the toast
    const toastEl = document.getElementById('liveToast');
    if (toastEl) {
      const toast = new Toast(toastEl, { autohide: true, delay: 5000 });
      (toastEl as any).bootstrapToast = toast;  // Store it for later use
    }
  }
  onSubmit(): void {
    const formData = this.userForm.value;
    
    const role : string = formData.userType == 'Administrator' ? 'Admin' : 'User';

    const age  = this.calculateAge(formData.BirthDate);
    const userData = {
      UserName: formData.UserName,
      PasswordHash: formData.Password,
      PhoneNumber: formData.PhoneNumber,
      Email: formData.Email,
      Nationality : formData.Nationality,
      DateOfBirth : formData.DateOfBirth,
      Age : age,
      Role : role,
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
    console.log("User data to be added - ",userData);
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

  calculateAge(birthDate: string) : number {
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const month = today.getMonth() - birthDateObj.getMonth();

    // If the current month is before the birth month, subtract 1 from the age
    if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
    return age - 1;
    }
    return age;
  }
}