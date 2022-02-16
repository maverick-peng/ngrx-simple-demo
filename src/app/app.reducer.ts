import { Post } from './modules/post/post.model';
import { ActionReducerMap } from '@ngrx/store';
import { PostReducer } from './modules/post/post.reducer';
import { SimpleReducer } from './simple.reducer';

import * as fromSimple from './simple.action';
import * as fromPost from './modules/post/post.action';

export interface AppState {
  post: Post;
  message: string;
}

export const reducers: ActionReducerMap<AppState, any> = {
  message: SimpleReducer,
  post: PostReducer,
};
