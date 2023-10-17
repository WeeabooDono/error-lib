import { ApplicationConfig, makeEnvironmentProviders } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { ERROR_ITEMS } from '../../projects/errors/src/lib/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
   makeEnvironmentProviders([{
      provide: ERROR_ITEMS, useValue: [
        {
          code: '404',
          browserTitle: 'iojuoizernhkazeglhklsg',
          image: '404-blue',
          title: 'error.404.title',
          description: 'error.404.description'
        },
      ],
    }])
    ]
};
