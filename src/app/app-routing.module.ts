import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WieIsCorinthaComponent} from './wie-is-corintha/wie-is-corintha.component';
import {HomeComponent} from './home/home.component';
import {WatZeggenAnderenComponent} from './wat-zeggen-anderen/wat-zeggen-anderen.component';
import {ContactComponent} from './contact/contact.component';
import {WatKanIkVoorJeDoenComponent} from './wat-kan-ik-voor-je-doen/wat-kan-ik-voor-je-doen.component';
import {EnglishComponent} from './english/english.component';

/* This element is used to dynamically generate the links in the navigation bar. */
export const navRoutes: Routes = [
  { path: 'wie-is-corintha', component: WieIsCorinthaComponent, data: {name: 'Wie is Corintha?', screenOrder: 2, iconClass: 'fas fa-user'} },
  { path: 'wat-kan-ik-voor-je-doen', component: WatKanIkVoorJeDoenComponent, data: {name: 'Wat kan ik voor je doen?', screenOrder: 3, iconClass: 'fas fa-graduation-cap'} },
  { path: 'wat-zeggen-anderen', component: WatZeggenAnderenComponent, data: {name: 'Wat zeggen anderen?', screenOrder: 4, iconClass: 'fas fa-people-arrows'} },
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
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
