import React from "react";
import "./App.css";
import { store } from "../../store";
import { user } from "../../actions";
import { fetching } from "./../../actions/index";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project in development</h1>
      </header>
    </div>
  );
}
store.dispatch(user.select("reactjs"));
store.dispatch(fetching.fetchPosts("reactjs"));
