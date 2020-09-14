import { SERVER, USER } from "../constants/index";

export const server = {
    requestPosts: (subreddit) => ({ type: SERVER.POSTS_REQUEST }),
    requestFailure: (error) => ({ type: SERVER.REQUEST_FAILURE, error }),
    requestSuccess: (response) => ({ type: SERVER.REQUEST_SUCCESS, response }),
    receivePosts: (subreddit, json) => ({
      type: SERVER.POSTS_RECEIVE,
      subreddit,
      receivedAt: Date.now(),
      posts: json.data.children.map((child) => child.data),
    }),
  },
  serverThunks = {
    fetchPosts: (subreddit) => (dispatch) => {
      dispatch(server.requestPosts(subreddit));
      fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then((response) => response.json())
        .then((json) => dispatch(server.receivePosts(subreddit, json)));
    },
  };

export const user = {
  selectSubreddit: (subreddit) => ({ type: USER.SELECT_SUBREDDIT, subreddit }),
  invalidateSubredditL: (subreddit) => ({
    type: USER.INVALIDATE_SUBREDDIT,
    subreddit,
  }),
};
