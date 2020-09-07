import * as types from "./../constants/server";

export const requestPosts = (subreddit) => ({
    type: types.FETCH_POST_REQUEST,
    subreddit,
  }),
  receivePosts = (subreddit, json) => ({
    type: types.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
  });
