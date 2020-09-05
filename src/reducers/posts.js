import { USER, SERVER } from "../constants";

const initialPosts = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

export const posts = (state = initialPosts, action) => {
  switch (action.type) {
    case USER.INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true,
      };
    case SERVER.FETCH_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
        didInvalidate: true,
      };
    case SERVER.RECEIVE_POSTS:
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
