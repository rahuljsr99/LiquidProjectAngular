
import { Component, OnInit,ViewChild } from '@angular/core';
import { GetPagedUsers} from '../Services/GetPagedUsers/get-paged-users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  userCount: number | null = null;
  adminCount: number | null = null;
  activeUsersCount: number | null = null;
  inactiveUsersCount: number | null = null;
  totalRecords: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;



  constructor(private getPagedUserService: GetPagedUsers) {}
  ngOnInit(): void {
    console.log('Calling user service now');
    this.getPagedUsers(this.currentPage);


  }

  getPagedUsers(page: number): void {
    console.log(`Fetching users for page: ${page}`);
    this.getPagedUserService.getPagedUsers(page, this.pageSize).subscribe(
      (response) => {
        console.log('Response from API:', response);

        // Accessing userList instead of users
        if (response && response.userList) {
          this.users = response.userList;
          this.totalRecords = response.totalRecords;
        } else {
          console.error('No userList found in the response');
        }
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  // Method to go to the next page
  nextPage(): void {
    if (this.currentPage * this.pageSize < this.totalRecords) {
      this.currentPage++;
      this.getPagedUsers(this.currentPage);
    }
  }

  // Method to go to the previous page
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPagedUsers(this.currentPage);
    }
  }

}
