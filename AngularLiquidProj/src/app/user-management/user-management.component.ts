
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
    this.getPagedUserService.getPagedUsers(page, this.pageSize).subscribe(
      (response) => {
        this.users = response.users;
        this.totalRecords = response.totalRecords;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

   nextPage(): void {
      if (this.currentPage * this.pageSize < this.totalRecords) {
        this.currentPage++;
        this.getPagedUsers(this.currentPage);
      }
    }
  
    previousPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getPagedUsers(this.currentPage);
      }
    }

}
