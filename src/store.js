import { rootReducer } from "./reducers/index";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
