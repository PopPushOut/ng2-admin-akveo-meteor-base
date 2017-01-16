import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages/pages.component';

/*export const routes: Route[] = [
  { path: '', component: PartiesListComponent }
];*/

export const routes: Routes = [
  //{ path: '', component: Pages }
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });