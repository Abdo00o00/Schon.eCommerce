import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import {StyleClassModule} from 'primeng/styleclass';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BlogComponent,
    PagesComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SliderModule,
    ButtonModule,
    BrowserAnimationsModule,
    SidebarModule,
    StyleClassModule,
    MegaMenuModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    FormsModule,
    CarouselModule,
    AnimateOnScrollModule
    
  ],          
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
