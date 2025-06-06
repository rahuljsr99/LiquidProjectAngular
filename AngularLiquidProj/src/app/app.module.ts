//Auth
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Services/interceptors/auth-interceptor.service';
import { CommonModule } from '@angular/common';
//Modules
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { AgGridModule } from 'ag-grid-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
import { signupComponent } from './signup/signup.component'; 
import { BuyPageComponent } from './buy-page/buy-page.component';
import { InvoiceComponent } from './CommonComponents/invoice/invoice.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AnalyticsDashboardComponent } from './CommonComponents/analytics-dashboard/analytics-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

// Services
import { UserService } from './Services/User_service/user.service';
import { AddUserService } from './Services/AddUser_Service/add-user-service.service';
import { CountUpModule } from 'ngx-countup';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieCardComponent } from './CommonComponents/movie-card/movie-card.component';
import { RevenuePageComponent } from './revenue-page/revenue-page/revenue-page.component';
import { MovieManagementComponent } from './movie-management/movie-management.component';




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
  
    MovieGridComponent,
    MovieCardComponent,
    RevenuePageComponent,
    MovieManagementComponent
   // UserListComponent, // Ensure path is correct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPrintModule,
    HttpClientModule,
    ReactiveFormsModule ,
    CountUpModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    AgGridModule,
    CommonModule,
    NgxChartsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },UserService,AddUserService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
