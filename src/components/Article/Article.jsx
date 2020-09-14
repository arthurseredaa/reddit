import { Card } from "@material-ui/core";
import React from "react";
import "./Article.css";

export const Article = ({ title, author, url }) => {
  if (title.length > 100) {
    title = title.slice(0, 100) + "...";
  }

  return (
    <Card className="article__card" style={{ margin: "30px 0" }}>
      <p className="article__author">{author}</p>
      <h1 className="article__title">
        <a rel="noopener noreferrer" target="_blank" href={`${url}`}>
          {title}
        </a>
      </h1>
    </Card>
  );
};
