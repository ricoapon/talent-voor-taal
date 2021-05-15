import { Component } from '@angular/core';
import { navRoutes } from './app-routing.module';
import { Routes} from '@angular/router';
import {VERSION} from "../environments/version";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * The component in which each page will be loaded.
 */
export class AppComponent {
  public version: string = VERSION;
  public navigationRoutes: Routes = this.sortedRoutes();

  sortedRoutes(): Routes {
    return navRoutes.sort((a,b) => a.data.screenOrder - b.data.screenOrder);
  }
}
