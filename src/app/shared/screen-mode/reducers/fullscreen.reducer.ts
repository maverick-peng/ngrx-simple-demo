import { Action } from '@ngrx/store';

import * as fromActions from '../actions';

const initialState = {
  isFullscreen: false,
};

export function reducer(
  state = initialState,
  action: fromActions.FullscreenActions
) {
  switch (action.type) {
    case fromActions.ENTER_FULLSCREEN: {
      return {
        ...state,
        isFullscreen: true,
      };
    }
    case fromActions.EXIT_FULLSCREEN: {
      return {
        ...state,
        isFullscreen: false,
      };
    }
    default: {
      return state;
    }
  }
}
