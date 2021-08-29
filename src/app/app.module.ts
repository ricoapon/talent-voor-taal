import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {WatKanIkVoorJeDoenComponent} from './wat-kan-ik-voor-je-doen/wat-kan-ik-voor-je-doen.component';
import {WieIsCorinthaComponent} from './wie-is-corintha/wie-is-corintha.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {WatZeggenAnderenComponent} from './wat-zeggen-anderen/wat-zeggen-anderen.component';
import {RouterModule} from '@angular/router';
import { EnglishComponent } from './english/english.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    AppComponent,
    WatKanIkVoorJeDoenComponent,
    WieIsCorinthaComponent,
    HomeComponent,
    ContactComponent,
    WatZeggenAnderenComponent,
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
