import { FETCH_POST_REQUEST, RECEIVE_POSTS } from "./../constants/server";
import { INVALIDATE_SUBREDDIT } from "./../constants/user";

let initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true,
      };
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};
