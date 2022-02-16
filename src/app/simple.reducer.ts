import { Action } from '@ngrx/store';

import * as fromAction from './simple.action';

export function SimpleReducer(
  state: string = 'default state',
  action: fromAction.SimpleActions
) {
  switch (action.type) {
    case fromAction.ACTION_A:
      return 'Action A';
    case fromAction.ACTION_B:
      return 'Action B';
    default:
      return state;
  }
}
