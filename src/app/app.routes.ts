import { Routes } from '@angular/router';
import { errorRoutes } from 'errors';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'error',
    pathMatch: 'full'
  },
  {
    path: 'error',
    children: errorRoutes
  }
];
