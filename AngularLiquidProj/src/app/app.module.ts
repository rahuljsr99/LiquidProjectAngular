import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './CommonComponents/navigation-bar/navigation-bar.component';
import { CarouselComponent } from './CommonComponents/carousel/carousel.component';
import { BannerComponent } from './CommonComponents/banner/banner.component';
import { ParallaxComponent } from './CommonComponents/parallax/parallax.component';
import { FooterComponent } from './CommonComponents/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    CarouselComponent,
    BannerComponent,
    ParallaxComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
