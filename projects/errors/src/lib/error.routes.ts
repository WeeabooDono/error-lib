import { Routes } from '@angular/router';
import { ErrorPageUnauthorizedComponent } from './error-page-unauthorized.component';
import { ErrorPageNotFoundComponent } from './error-page-not-found.component';

export const errorRoutes: Routes = [
  {
    path: '401',
    component: ErrorPageUnauthorizedComponent,
  },
  {
    path: '404',
    component: ErrorPageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
