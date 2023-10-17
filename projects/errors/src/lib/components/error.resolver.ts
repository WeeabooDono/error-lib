import { ActivatedRouteSnapshot } from '@angular/router';
import { ErrorDTO } from '../model/error.model';
import { DEFAULT_ERROR_PAGE_CODE, ERROR_PARAM } from './error.routes';
import { inject } from '@angular/core';
import { ERROR_ITEMS, errorItemsDefault } from '../config';

export const errorResolver: (route: ActivatedRouteSnapshot) => ErrorDTO =
  (route: ActivatedRouteSnapshot): ErrorDTO => {
  console.log('injection',inject(ERROR_ITEMS, { optional: true,skipSelf:true }));
    const errorItems = inject(ERROR_ITEMS, { optional: true }) || errorItemsDefault;
    const code = route.params[ERROR_PARAM];
    const error = errorItems.find(e => e.code === code);
    return error ? error : errorItems.find(e => e.code === DEFAULT_ERROR_PAGE_CODE)!;
  };

export const errorTitleResolver: (route: ActivatedRouteSnapshot) => string =
  (route: ActivatedRouteSnapshot): string => {
    const errorItems = inject(ERROR_ITEMS, { optional: true }) || errorItemsDefault;
    const code = route.params[ERROR_PARAM];
    const error = errorItems.find(e => e.code === code);
    return error ? error.browserTitle : errorItems.find(e => e.code === DEFAULT_ERROR_PAGE_CODE)!.browserTitle;
  };
