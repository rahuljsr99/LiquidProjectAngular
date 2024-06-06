import { Component } from '@angular/core';
import { ModifyPermissiosService } from '../Services/ModifyPermissions_Service/modify-permissios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-modify-permissions',
  templateUrl: './modify-permissions.component.html',
  styleUrl: './modify-permissions.component.scss'
})


export class ModifyPermissionsComponent {
  isUserAdded: boolean = false;
  isSubmitting: boolean = false;
  isFormValid: boolean = true; 
  permissionsForm: FormGroup;

  constructor(private permissionsService: ModifyPermissiosService, private fb:FormBuilder) {
    this.permissionsForm = this.fb.group({
    selectedUserId: [''],
    IsAdmin : [true],
    permissionChangeRequestType :[''],
    permissionChangeRequestValue: [''],
    changeRequestUserId: ['']

  });

  // Listen to form changes and debounce them
  this.permissionsForm.valueChanges.pipe(debounceTime(300)).subscribe(() => {
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
    const formData = this.permissionsForm.value;
    const PermissionData = {
    selectedUserId: formData.name.value,
    IsAdmin :formData.IsAdmin.value,
    permissionChangeRequestType :formData.permissionChangeRequestType.value,
    permissionChangeRequestValue: formData.permissionChangeRequestValue.value,
    changeRequestUserId:formData.changeRequestUserId.value
    };

    this.isFormValid = this.permissionsForm.valid;
    if (!this.isFormValid) {
      return;
    }

    this.isSubmitting = true;

    this.permissionsService.postData('ModifyPermissions', PermissionData).subscribe(
      response => {
      console.log('Response:', response);
        this.isUserAdded = true;
        this.isSubmitting = false;

        // Reset the form values
        this.permissionsForm.reset({
          selectedUserId: '',
          IsAdmin : true,
          permissionChangeRequestType :'',
          permissionChangeRequestValue: '',
          changeRequestUserId: ''
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





  

 