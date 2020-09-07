import * as types from "./../constants/user";

export const selectSubreddit = (subreddit) => ({
    type: types.SELECT_SUBREDDIT,
    subreddit,
  }),
  invalidateSubreddit = (subreddit) => ({
    type: types.INVALIDATE_SUBREDDIT,
    subreddit,
  });
