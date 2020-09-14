import { SERVER, USER } from "../constants";
import { posts } from "./posts";

export const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case USER.INVALIDATE_SUBREDDIT:
    case SERVER.POSTS_RECEIVE:
    case SERVER.POSTS_REQUEST:
      return {
        // ...state,
        posts: posts(state[action.subreddit], action),
      };
    default:
      return state;
  }
};
