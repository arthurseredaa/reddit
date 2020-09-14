import React, { useState } from "react";
import "./App.css";
import { serverThunks } from "../../actions";
import { user } from "./../../actions/index";
import { useDispatch } from "react-redux";
import { HolderContainer } from "./../../containers/HolderContainer";
import { Header } from "../Header/Header";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  let dispatch = useDispatch();

  const onSearchSubreddit = () => {
    if (inputValue) {
      dispatch(user.selectSubreddit(inputValue));
      dispatch(serverThunks.fetchPosts(inputValue));
    }
  };

  return (
    <div className="app">
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearchSubreddit={onSearchSubreddit}
      />
      <HolderContainer />
    </div>
  );
};
