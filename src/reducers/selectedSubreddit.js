import { USER } from "../constants";

export const selectedSubreddit = (state = "reactjs", action) => {
  switch (action.type) {
    case USER.SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
};
