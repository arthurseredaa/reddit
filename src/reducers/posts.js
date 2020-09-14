import { SERVER, USER } from "../constants";

let initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case SERVER.POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case USER.INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true,
      };
    case SERVER.POSTS_RECEIVE:
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
