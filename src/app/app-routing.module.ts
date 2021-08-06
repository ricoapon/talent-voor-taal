import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoorstellenComponent} from './voorstellen/voorstellen.component';
import {HomeComponent} from './home/home.component';
import {CollegaComponent} from './collega/collega.component';
import {ContactComponent} from './contact/contact.component';
import {CursistComponent} from './cursist/cursist.component';
import {EnglishComponent} from './english/english.component';
import {ExpertiseComponent} from "./expertise/expertise.component";

/* This element is used to dynamically generate the links in the navigation bar. */
export const navRoutes: Routes = [
  { path: 'voorstellen', component: VoorstellenComponent, data: {name: 'Wie is Corintha?', screenOrder: 2, iconClass: 'fas fa-user'} },
  { path: 'cursist', component: CursistComponent, data: {name: 'Wat kan ik voor je doen?', screenOrder: 3, iconClass: 'fas fa-graduation-cap'} },
  { path: 'collega', component: CollegaComponent, data: {name: 'Wat zeggen anderen?', screenOrder: 4, iconClass: 'fas fa-people-arrows'} },
  { path: 'expertise', component: ExpertiseComponent, data: {name: 'Expertise doorgeven', screenOrder: 5, iconClass: 'fas fa-people-arrows'} },
  { path: 'english', component: EnglishComponent, data: {name: 'English', screenOrder: 6, iconClass: 'fas fa-globe-americas'} },
  { path: 'contact', component: ContactComponent, data: {name: 'Contact', screenOrder: 7, iconClass: 'far fa-address-card'} },
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
