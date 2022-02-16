import { Post } from './modules/post/post.model';
import { ActionReducerMap } from '@ngrx/store';
import { PostReducer } from './modules/post/post.reducer';
import { SimpleReducer } from './simple.reducer';

export interface AppState {
  post: Post;
  message: string;
}

export const reducers: ActionReducerMap<AppState, any> = {
  message: SimpleReducer,
  post: PostReducer,
};
