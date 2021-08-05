import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoorstellenComponent} from './voorstellen/voorstellen.component';
import {HomeComponent} from './home/home.component';
import {CollegaComponent} from './collega/collega.component';
import {ContactComponent} from './contact/contact.component';
import {CursistComponent} from './cursist/cursist.component';
import {EnglishComponent} from './english/english.component';

/* This element is used to dynamically generate the links in the navigation bar. */
export const navRoutes: Routes = [
  { path: 'voorstellen', component: VoorstellenComponent, data: {name: 'Voorstellen', screenOrder: 2, iconClass: 'fas fa-user'} },
  { path: 'cursist', component: CursistComponent, data: {name: 'Cursist', screenOrder: 3, iconClass: 'fas fa-graduation-cap'} },
  { path: 'collega', component: CollegaComponent, data: {name: 'Collega', screenOrder: 4, iconClass: 'fas fa-people-arrows'} },
  { path: 'english', component: EnglishComponent, data: {name: 'English', screenOrder: 5, iconClass: 'fas fa-globe-americas'} },
  { path: 'contact', component: ContactComponent, data: {name: 'Contact', screenOrder: 6, iconClass: 'far fa-address-card'} },
  // Empty path must be last, since this will always match.
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
