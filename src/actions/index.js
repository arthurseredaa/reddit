import { SERVER } from "../constants/index";
import { USER } from "../constants/index";

// ACTION CREATORS FOR SERVER ACTIONS
export const fetching = {
  success: (response) => ({
    type: SERVER.FETCH_POST_SUCCESS,
    response,
  }),
  failure: (error) => ({ type: SERVER.FETCH_POST_FAILURE, error }),
  request: () => ({ type: SERVER.FETCH_POST_REQUEST }),
  receive: (subreddit, json) => ({
    type: SERVER.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
  }),
  shouldPostsFetch: (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit];
    return !posts ? true : posts.isFetching ? false : posts.didInvalidate;
  },
  fetchPostsIfNeeded: (subreddit) => {
    return (dispatch, getState) =>
      fetching.shouldPostsFetch(getState(), subreddit)
        ? dispatch(fetching.fetchPosts(subreddit))
        : Promise.resolve();
  },
  fetchPosts: (subreddit) => (dispatch) => {
    dispatch(fetching.request);
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        (response) => response.json(),
        (error) => console.log("Error in thunk generator: ", error)
        // Не используйте catch, потому что это также перехватит любые ошибки в диспетчеризации и результате рендеринга, что приведет к циклу ошибок «Unexpected batch number»
      )
      .then((json) => dispatch(fetching.receive(subreddit, json)));
  },
};

// ACTION CREATORS FOR USER ACTIONS
export const user = {
  select: (subreddit) => ({ type: USER.SELECT_SUBREDDIT, subreddit }),
  invalidate: (subreddit) => ({
    type: USER.INVALIDATE_SUBREDDIT,
    subreddit,
  }),
};
