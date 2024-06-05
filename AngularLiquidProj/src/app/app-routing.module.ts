import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { LoginComponent } from './login/login.component';
import { signupComponent } from './signup/signup.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { InvoiceComponent } from './CommonComponents/invoice/invoice.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ModifyPermissionsComponent } from './modify-permissions/modify-permissions.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
 { path: 'home', component: HomeComponent }, // Define the route for the homepage
 { path: 'signup', component: signupComponent },
 { path: 'login', component: LoginComponent }, // Define the route for the loginpage
 //{ path: '**', component: LoginComponent }, // Add other routes if needed
 { path: 'buy', component: BuyPageComponent },
 { path: 'invoice', component: InvoiceComponent },
 { path: 'Admin', component: AdminPageComponent},
 { path: 'ManageUsers', component: UserManagementComponent},
 { path: 'AddUser', component: AddUserComponent }, 
 {path: 'ModifyPermissions', component: ModifyPermissionsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
