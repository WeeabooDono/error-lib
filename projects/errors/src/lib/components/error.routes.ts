import { Routes } from '@angular/router';
import { ErrorOutletComponent } from '../outlet/error-outlet.component';
import { ErrorPageComponent } from './error.component';
import { errorResolver, errorTitleResolver } from './error.resolver';

export const ERROR_PARAM = 'code';
export const DEFAULT_ERROR_PAGE_CODE = '404';

export const errorRoutes: Routes = [
  {
    path: `:${ ERROR_PARAM }`,
    component: ErrorOutletComponent,
    resolve: {
      error: errorResolver,
    },
    title: errorTitleResolver,
    children: [
      {
        path: '',
        component: ErrorPageComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: DEFAULT_ERROR_PAGE_CODE,
    pathMatch: 'full',
  },
];
