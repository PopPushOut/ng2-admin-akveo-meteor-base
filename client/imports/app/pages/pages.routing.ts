import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'login/login.module'
  },
  {
    path: 'register',
    loadChildren: 'register/register.module'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'dashboard/dashboard.module' },
      //{ path: 'editors', loadChildren: './editors/editors.module' },
      //{ path: 'components', loadChildren: 'components/components.module' },
      { path: 'ui', loadChildren: 'ui/ui.module' }
      //{ path: 'forms', loadChildren: 'forms/forms.module' },
      //{ path: 'tables', loadChildren: 'da./tables/tables.module' },
      //{ path: 'maps', loadChildren: 'maps/maps.module' },
      //{ path: 'charts', loadChildren: './charts/charts.module' }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
