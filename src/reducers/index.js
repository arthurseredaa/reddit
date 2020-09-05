import { combineReducers } from "redux";
import { postsBySubreddit } from "./postsBySubredit";
import { selectedSubreddit } from "./selectedSubreddit";

export const rootReducer = combineReducers({
  selectedSubreddit,
  postsBySubreddit,
});
