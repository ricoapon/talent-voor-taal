import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoorstellenComponent} from './voorstellen/voorstellen.component';
import {HomeComponent} from './home/home.component';
import {CollegaComponent} from './collega/collega.component';
import {ContactComponent} from './contact/contact.component';
import {CursistComponent} from './cursist/cursist.component';
import {WerkgeverComponent} from './werkgever/werkgever.component';
import {EnglishComponent} from './english/english.component';

/* This element is used to dynamically generate the links in the navigation bar. */
export const navRoutes: Routes = [
  { path: 'collega', component: CollegaComponent, data: {name: 'Collega', screenOrder: 5, iconClass: 'fas fa-people-arrows'} },
  { path: 'contact', component: ContactComponent, data: {name: 'Contact', screenOrder: 7, iconClass: 'far fa-address-card'} },
  { path: 'cursist', component: CursistComponent, data: {name: 'Cursist', screenOrder: 3, iconClass: 'fas fa-graduation-cap'} },
  { path: 'english', component: EnglishComponent, data: {name: 'English', screenOrder: 6, iconClass: 'fas fa-globe-americas'} },
  { path: 'voorstellen', component: VoorstellenComponent, data: {name: 'Voorstellen', screenOrder: 2, iconClass: 'fas fa-user'} },
  { path: 'werkgever', component: WerkgeverComponent, data: {name: 'Werkgever', screenOrder: 4, iconClass: 'fas fa-briefcase'} },

  { path: '', component: HomeComponent, data: {name: "Home", screenOrder: 1, iconClass: 'fas fa-home'} },
]

const otherRoutes: Routes = [
  // Redirect to home if path is not registered.
  { path: '**', redirectTo: '' }
]

const routes: Routes = navRoutes.concat(otherRoutes);

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
