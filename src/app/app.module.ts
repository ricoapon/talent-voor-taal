import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CursistComponent} from './cursist/cursist.component';
import {VoorstellenComponent} from './voorstellen/voorstellen.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {CollegaComponent} from './collega/collega.component';
import {RouterModule} from '@angular/router';
import { EnglishComponent } from './english/english.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    AppComponent,
    CursistComponent,
    VoorstellenComponent,
    HomeComponent,
    ContactComponent,
    CollegaComponent,
    EnglishComponent,
    ExpertiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
