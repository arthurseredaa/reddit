import React from "react";
import { AppBar, Button, TextField } from "@material-ui/core";
import "./Header.css";

export const Header = ({ inputValue, setInputValue, onSearchSubreddit }) => {
  return (
    <AppBar position="static" color="secondary" className="app__header">
      <div className="header">
        <h2 className="header__logo">Reddit headlines</h2>
        <div className="search__subreddit">
          <TextField
            variant="outlined"
            outline="none"
            InputProps={{ className: "search__input" }}
            placeholder={"javascript, react, pizza..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="contained" onClick={onSearchSubreddit}>
            Search
          </Button>
        </div>
      </div>
    </AppBar>
  );
};
