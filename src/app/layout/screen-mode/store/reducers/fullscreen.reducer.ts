import * as fromActions from '../actions';

export interface FullscreenState {
  isFullscreen: boolean;
}

const initialState: FullscreenState = {
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
