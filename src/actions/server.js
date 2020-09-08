import * as types from "./../constants/server";

export const requestPosts = (subreddit) => ({
    type: types.FETCH_POST_REQUEST,
    subreddit,
  }),
  failurePosts = (error) => ({
    type: types.FETCH_POST_FAILURE,
    error,
  }),
  successPosts = (response) => ({
    type: types.FETCH_POST_SUCCESS,
    response,
  }),
  receivePosts = (subreddit, json) => ({
    type: types.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
  }),
  fetchPosts = (subreddit) => (dispatch) => {
    dispatch(requestPosts(subreddit));
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        (response) => response.json(),
        (error) =>
          console.error(
            `ERROR in fetchPosts thunk creator(actions/server.js): ${error}`
          )
      )
      .then((json) => receivePosts(subreddit, json));
  };
