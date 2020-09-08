import { FETCH_POST_REQUEST, RECEIVE_POSTS } from "./../constants/server";
import { INVALIDATE_SUBREDDIT } from "./../constants/user";
import { posts } from "./posts";

export const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case FETCH_POST_REQUEST:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action),
      };
    default:
      return state;
  }
};
