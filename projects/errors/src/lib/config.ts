import { InjectionToken, Injector } from '@angular/core';
import { ErrorDTO } from './model/error.model';

export const errorItemsDefault: ErrorDTO[] = [
  {
    code: '0',
    browserTitle: 'error.no-connection.browser-title',
    image: 'flag-blue',
    title: 'error.no-connection.title',
    description: 'error.no-connection.description'
  },
  {
    code: '401',
    browserTitle: 'error.401.browser-title',
    image: '401-blue',
    title: 'error.401.title',
    description: 'error.401.description'
  },
  {
    code: '403',
    browserTitle: 'error.403.browser-title',
    image: '403-blue',
    title: 'error.403.title',
    description: 'error.403.description'
  },
  {
    code: '404',
    browserTitle: 'error.404.browser-title',
    image: '404-blue',
    title: 'error.404.title',
    description: 'error.404.description'
  },
  {
    code: '500',
    browserTitle: 'error.500.browser-title',
    image: '500-blue',
    title: 'error.500.title',
    description: 'error.500.description'
  },
  {
    code: '503',
    browserTitle: 'error.503.browser-title',
    image: '503-blue',
    title: 'error.503.title',
    description: 'error.503.description'
  },
  {
    code: '504',
    browserTitle: 'error.504.browser-title',
    image: '504-blue',
    title: 'error.504.title',
    description: 'error.504.description'
  },
  {
    code: 'unexpected',
    browserTitle: 'error.unexpected.browser-title',
    image: 'ladder-blue',
    title: 'error.unexpected.title',
    description: 'error.unexpected.description'
  },
  {
    code: 'oidc-unavailable',
    browserTitle: 'error.oidc-unavailable.browser-title',
    image: 'login-error-blue',
    title: 'error.oidc-unavailable.title',
    description: 'error.oidc-unavailable.description'
  },
  {
    code: 'under-construction',
    browserTitle: 'error.under-construction.browser-title',
    image: 'under-construction',
    title: 'error.under-construction.title',
    description: 'error.under-construction.description'
  }
];

export const ERROR_ITEMS = new InjectionToken<ErrorDTO[]>('Error pages');

