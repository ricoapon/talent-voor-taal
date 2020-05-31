import { Component } from '@angular/core';
import { version } from '../../package.json';
import { navRoutes } from './app-routing.module';
import { Routes} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * The component in which each page will be loaded.
 */
export class AppComponent {
  public version: string = version;
  public navigationRoutes: Routes = this.sortedRoutes();

  sortedRoutes(): Routes {
    return navRoutes.sort((a,b) => a.data.screenOrder - b.data.screenOrder);
  }
}
