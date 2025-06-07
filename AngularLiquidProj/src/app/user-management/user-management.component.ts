import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/UserService/users.service';
import { ColDef, GridApi, GridReadyEvent, CellValueChangedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  visibleUsers: any[] = [];
  editedUsers = new Set<number>();
  userCount: number | null = null;
  adminCount: number | null = null;
  activeUsersCount: number | null = null;
  inactiveUsersCount: number | null = null;
  totalActiveAdminsCount: number = 0;
  inactiveAdminsCount: number | null = null;
  totalRecords = 0;
  currentPage = 1;
  pageSize = 11;
  isLoading = false;

  gridApi!: GridApi;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getPagedUsers(this.currentPage);  
    this.loadMetrics();
  }

  loadMetrics() {
  this.usersService.getSoulCounts().subscribe(counts => {
    this.totalRecords = counts.totalSoulCount;
    this.userCount = counts.userCount;
    this.adminCount = counts.adminCount;
    this.activeUsersCount = counts.activeUserCount;
    this.totalActiveAdminsCount = counts.activeAdminCount;
    this.inactiveUsersCount = counts.inactiveUserCount;
    this.inactiveAdminsCount = counts.inactiveAdminCount;
  });
}
  getPagedUsers(page: number): void {
    if (this.isLoading) return;
    this.isLoading = true;
    this.usersService.getPagedUsers(page, this.pageSize).subscribe(
      (response) => {
        if (response && response.userList) {
          this.users.push(...response.userList);
          this.visibleUsers = [...this.users];
          this.totalRecords = response.totalRecords;
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching users', error);
        this.isLoading = false;
      }
    );
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

onCellValueChanged(event: CellValueChangedEvent) {
  const userId = event.data.userID;
  const fieldName = event.colDef.field;
  const newValue = event.newValue;

  const updatePayload = {
    UserId: userId,
    [fieldName!]: newValue
  };

  this.usersService.updateUser(updatePayload).subscribe({
  next: () => console.log(`Updated ${fieldName} for user ${userId}`),
  error: (err) => console.error('Update failed:', err)
});
}

  onRowValueChanged(event: any) {
  const updatedUser = event.data;

  this.usersService.updateUser({ userUpdate: updatedUser }).subscribe({
    next: () => console.log(`User ${updatedUser.userId} updated`),
    error: (err) => console.error('Update failed:', err)
  });
}

  hasSelected(): boolean {
    return this.gridApi?.getSelectedRows().length > 0;
  }

  bulkEdit() {
    const selected = this.gridApi.getSelectedRows();
    console.log('Bulk edit:', selected);
  }

 onBodyScroll() {
  const verticalPixel = this.gridApi.getVerticalPixelRange();
  const scrollPosition = verticalPixel.bottom;
  const scrollMax = this.gridApi.getVerticalPixelRange().bottom;
  
  if (scrollPosition >= scrollMax - 50 && this.visibleUsers.length < this.totalRecords && !this.isLoading) {
    this.currentPage++;
    this.getPagedUsers(this.currentPage);
  }
}

  columnDefs: ColDef[] = [
    {
      headerName: '', checkboxSelection: true, width: 50,
      headerCheckboxSelection: true
    },
    { field:'userID' ,headerName: 'User ID', width: 40 },
    { field: 'username', tooltipField: 'username',headerName: 'User Name'},
    {field:'passwordHash', headerName:'Password',editable: true},
    { field: 'firstName', editable: true },
    { field: 'lastName', editable: true },
    { field: 'email', tooltipField:'email', wrapText:true, resizable:true, autoHeight:true, editable: true },
    {
      field: 'isActive',
      headerName: 'Status',
      cellRenderer: (params: any) => 
        `<span class="badge ${params.value ? 'bg-success' : 'bg-secondary'}">
          ${params.value ? 'Active' : 'Inactive'}
        </span>`
    },
    { field: 'createdBy',  headerName: 'Created by' },
     {
  field: 'createdAt', tooltipField:'email',  resizable:true, autoHeight:true,
  headerName: 'Created On',
  valueFormatter: (params) => {
    const date = new Date(params.value);
    const day = date.getDate();
    const daySuffix = (d: number) => ['th','st','nd','rd'][(d % 10 > 3 || Math.floor(d % 100 / 10) === 1) ? 0 : d % 10];
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return `${day}${daySuffix(day)} ${date.toLocaleDateString('en-US', options)} - ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true })}`;
  }
},
 { field: 'updatedBy',  tooltipField:'email', resizable:true, autoHeight:true, headerName: 'Last Updated By' },
 {
  field: 'updatedAt',
  headerName: 'Last Updated On',
  valueFormatter: (params) => {
    const date = new Date(params.value);
    const day = date.getDate();
    const daySuffix = (d: number) => ['th','st','nd','rd'][(d % 10 > 3 || Math.floor(d % 100 / 10) === 1) ? 0 : d % 10];
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return `${day}${daySuffix(day)} ${date.toLocaleDateString('en-US', options)} - ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true })}`;
  }
},
   {
  field: 'role',
  headerName: 'Role',
  cellRenderer: (params: any) =>
    `<span class="badge ${params.value === 'Admin' ? 'bg-warning text-dark' : 'bg-primary'}">
      ${params.value}
    </span>`
}

  ];

  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
  };

// Call this after you get users from API
updateMetrics() {
  this.userCount = this.users.length;
  this.activeUsersCount = this.users.filter(u => u.isActive && u.role === 'user').length;
  this.adminCount = this.users.filter(u => u.role === 'Administrator').length;
  this.totalActiveAdminsCount = this.users.filter(u => u.role === 'Administrator' && u.isActive).length;
}

}
