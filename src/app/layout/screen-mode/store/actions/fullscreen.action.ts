import { Action } from '@ngrx/store';

export const ENTER_FULLSCREEN = '[Fullscreen] enter fullscreen';
export const EXIT_FULLSCREEN = '[Fullscreen] exit fullscreen';

export class EnterFullscreen implements Action {
  readonly type = ENTER_FULLSCREEN;
}

export class ExitFullscreen implements Action {
  readonly type = EXIT_FULLSCREEN;
}

export type FullscreenActions = EnterFullscreen | ExitFullscreen;
