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
  { path: 'collega', component: CollegaComponent, data: {name: 'Collega', screenOrder: 5} },
  { path: 'contact', component: ContactComponent, data: {name: 'Contact', screenOrder: 7} },
  { path: 'cursist', component: CursistComponent, data: {name: 'Cursist', screenOrder: 3} },
  { path: 'english', component: EnglishComponent, data: {name: 'English', screenOrder: 6} },
  { path: 'voorstellen', component: VoorstellenComponent, data: {name: 'Voorstellen', screenOrder: 2} },
  { path: 'werkgever', component: WerkgeverComponent, data: {name: 'Werkgever', screenOrder: 4} },

  { path: '', component: HomeComponent, data: {name: "Home", screenOrder: 1} },
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
