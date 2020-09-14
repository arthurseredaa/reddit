import { combineReducers } from "redux";
import { postsBySubreddit } from "./postsBySubreddit";
import { selectedSubreddit } from "./selectedSubreddit";

export const rootReducer = combineReducers({
  selectedSubreddit,
  postsBySubreddit,
});
