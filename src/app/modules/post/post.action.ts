import { Action } from '@ngrx/store';

export class Upvote implements Action {
  readonly type = 'UPVOTE';
}

export class Downvote implements Action {
  readonly type = 'DOWNVOTE';
}

export class EditPost implements Action {
  readonly type = 'EDIT_POST';

  constructor(public payload: { text: string }) {}
}

export type PostActions = Upvote | Downvote | EditPost;
