import { posts } from "./posts";
import { USER, SERVER } from "../constants";

export const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case USER.INVALIDATE_SUBREDDIT:
    case SERVER.FETCH_POST_REQUEST:
    case SERVER.RECEIVE_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action),
      };
    default:
      return state;
  }
};
