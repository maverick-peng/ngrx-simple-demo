import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromFullscreen from './reducers/fullscreen.reducer';
import * as fromActions from './actions';

export interface ScreenModeState {
  fullscreen: fromFullscreen.FullscreenState;
}

export const reducers: ActionReducerMap<
  ScreenModeState,
  fromActions.FullscreenActions
> = {
  fullscreen: fromFullscreen.reducer,
};

export * from './actions';

export const getScreenModeState =
  createFeatureSelector<ScreenModeState>('screenmode');

export const getFullscreenState = createSelector(
  getScreenModeState,
  (state) => {
    return state.fullscreen;
  }
);

export const getIsFullscreen = createSelector(getFullscreenState, (state) => {
  return state.isFullscreen;
});
