import React from "react";
import { Article } from "../Article/Article";
import { Preloader } from "../Preloader/Preloader";
import "./Holder.css";
export const Holder = ({ articles, isFetching }) => {
  return (
    <div className="articles__holder">
      {isFetching ? (
        <Preloader />
      ) : articles ? (
        articles.map((article) => (
          <Article
            key={Math.random() * 100}
            url={article.url}
            title={article.title}
            author={article.author}
          />
        ))
      ) : (
        <h1 className="default__text">Search something</h1>
      )}
    </div>
  );
};
