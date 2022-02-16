import * as PostActions from './post.action';

import { Post } from './post.model';

const initialState: Post = {
  text: 'initial text',
  likes: 0,
};

export function PostReducer(
  state = initialState,
  action: PostActions.PostActions
) {
  switch (action.type) {
    case 'UPVOTE':
      return {
        ...state,
        likes: state.likes + 1,
      };
    case 'DOWNVOTE':
      return {
        ...state,
        likes: state.likes - 1,
      };
    case 'EDIT_POST':
      return {
        ...state,
        text: action.payload.text,
      };
    default:
      return initialState;
  }
}
