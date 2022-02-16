import { Action } from '@ngrx/store';

export const ACTION_A = '[simple] action a';
export const ACTION_B = '[simple] action b';

export class ActionA implements Action {
  readonly type = ACTION_A;
}

export class ActionB implements Action {
  readonly type = ACTION_B;
}

export type SimpleActions = ActionA | ActionB;
