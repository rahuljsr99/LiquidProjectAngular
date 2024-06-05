import { Component } from '@angular/core';
import { ModifyPermissiosService,ModifyPermissionsRequestModel } from '../Services/ModifyPermissions_Service/modify-permissios.service';

@Component({
  selector: 'app-modify-permissions',
  templateUrl: './modify-permissions.component.html',
  styleUrl: './modify-permissions.component.scss'
})


export class ModifyPermissionsComponent {
  isUserAdded: boolean = false;
  isSubmitting: boolean = false;
  isFormValid: boolean = true; 


  constructor(private permissionsService: ModifyPermissiosService) { }

  submit(formData: any): void {
  const permissionData={
    currentUserId: formData.name.value,
    IsAdmin :formData.IsAdmin.value,
    permissionChangeRequestType :formData.permissionChangeRequestType.value,
    permissionChangeRequestValue: formData.permissionChangeRequestValue.value,
    changeRequestUserId:formData.changeRequestUserId.value
  };
    if (this.selectedUserId === '') {
      alert('Please select a user');
      return;
    }
  
  const request: ModifyPermissionsRequestModel = {
    currentUserId: this.currentUserId,
    changeRequestUserId: this.selectedUserId,
    permissionChangeRequestType: 'Admin',
    permissionChangeRequestValue: this.isAdmin
  };
  this.permissionsService.modifyPermissions(request).subscribe(response => {
    alert(response.message);
  }, error => {
    alert(error.error);
  });
   // Repeat for the 'Active' permission
   const requestActivate: ModifyPermissionsRequestModel = {
    currentUserId: this.currentUserId,
    changeRequestUserId: this.selectedUserId,
    permissionChangeRequestType: 'Activate',
    permissionChangeRequestValue: this.isActive
  };
  this.permissionsService.modifyPermissions(requestActivate).subscribe(response => {
    alert(response.message);
  }, error => {
    alert(error.error);
  });
}
}

