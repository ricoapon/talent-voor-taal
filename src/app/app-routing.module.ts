import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoorstellenComponent} from './voorstellen/voorstellen.component';
import {HomeComponent} from './home/home.component';
import {CollegaComponent} from './collega/collega.component';
import {ContactComponent} from './contact/contact.component';
import {CursistComponent} from './cursist/cursist.component';
import {WerkgeverComponent} from './werkgever/werkgever.component';
import {EnglishComponent} from './english/english.component';

const routes: Routes = [
  { path: 'collega', component: CollegaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cursist', component: CursistComponent },
  { path: 'english', component: EnglishComponent },
  { path: 'voorstellen', component: VoorstellenComponent },
  { path: 'werkgever', component: WerkgeverComponent },
  { path: '', component: HomeComponent },
  // Redirect to home if path is not registered.
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
