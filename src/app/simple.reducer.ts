import { Action } from "@ngrx/store";

export function SimpleReducer(state: string = 'default state', action: Action) {

  switch(action.type) {
    case 'ACTION_A':
      return 'Action A';
    case 'ACTION_B':
      return 'Action B';
    default:
      return state;
  }
}
