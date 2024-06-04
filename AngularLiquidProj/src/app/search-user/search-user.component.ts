import { Component } from '@angular/core';
import { GetUserByIdService } from '../Services/GetUserById_Service/get-user-by-id.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})

export class SearchUserComponent {
  user : any;
  searchUserForm: FormGroup;
  userId : number = 0;
  
  constructor(private getUserByIdService:GetUserByIdService, private Fb:FormBuilder)
  {
    this.searchUserForm = this.Fb.group({userId : [0, Validators.required]})
  }

  onSubmit(): void {
    console.log('form submitted');
    if (this.searchUserForm.valid) {
      const userId = this.searchUserForm.value.userId;
      this.getUserByIdService.getUserById(userId).subscribe(
        response => {
          this.user = response;
          console.log('User:', this.user);
        },
        error => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }
}
