import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './CommonComponents/navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './CommonComponents/carousel/carousel.component';
import { BannerComponent } from './CommonComponents/banner/banner.component';
import { ParallaxComponent } from './CommonComponents/parallax/parallax.component';
import { FooterComponent } from './CommonComponents/footer/footer.component';
import { FeaturedMoviesComponent } from './CommonComponents/featured-movies/featured-movies.component';
import { QuoteBoxComponent } from './CommonComponents/quote-box/quote-box.component';
import { signupComponent } from './signup/signup.component'; // Ensure correct naming
import { BuyPageComponent } from './buy-page/buy-page.component';
import { InvoiceComponent } from './CommonComponents/invoice/invoice.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AnalyticsDashboardComponent } from './CommonComponents/analytics-dashboard/analytics-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ModifyPermissionsComponent } from './modify-permissions/modify-permissions.component';
// Services
import { UserService } from './Services/User_service/user.service';
import { AddUserService } from './Services/AddUser_Service/add-user-service.service';
import { SearchUserComponent } from './search-user/search-user.component';
import { CountUpModule } from 'ngx-countup';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    LoginComponent,
    CarouselComponent,
    BannerComponent,
    ParallaxComponent,
    FooterComponent,
    FeaturedMoviesComponent,
    QuoteBoxComponent,
    signupComponent, // Ensure correct naming
    BuyPageComponent,
    InvoiceComponent,
    AdminPageComponent,
    AnalyticsDashboardComponent,
    UserManagementComponent,
    AddUserComponent,
    SearchUserComponent,
    ModifyPermissionsComponent,
   // UserListComponent, // Ensure path is correct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPrintModule,
    HttpClientModule,
    ReactiveFormsModule ,
    CountUpModule 
  ],
  providers: [UserService,AddUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
