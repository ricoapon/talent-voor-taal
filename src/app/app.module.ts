import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CursistComponent} from './cursist/cursist.component';
import {VoorstellenComponent} from './voorstellen/voorstellen.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {CollegaComponent} from './collega/collega.component';
import {WerkgeverComponent} from './werkgever/werkgever.component';
import {RouterModule} from '@angular/router';
import { EnglishComponent } from './english/english.component';

@NgModule({
  declarations: [
    AppComponent,
    CursistComponent,
    VoorstellenComponent,
    HomeComponent,
    ContactComponent,
    CollegaComponent,
    WerkgeverComponent,
    EnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
