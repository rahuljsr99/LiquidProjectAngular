import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './CommonComponents/navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './CommonComponents/carousel/carousel.component';
import { BannerComponent } from './CommonComponents/banner/banner.component';
import { ParallaxComponent } from './CommonComponents/parallax/parallax.component';
import { FooterComponent } from './CommonComponents/footer/footer.component';
import { FeaturedMoviesComponent } from './CommonComponents/featured-movies/featured-movies.component';
import { QuoteBoxComponent } from './CommonComponents/quote-box/quote-box.component';
import { signupComponent } from './signup/signup.component';

import { BuyPageComponent } from './buy-page/buy-page.component';
import { InvoiceComponent } from './CommonComponents/invoice/invoice.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';


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
    signupComponent,
    BuyPageComponent,
    InvoiceComponent,
    MovieListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
