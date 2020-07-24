// src/pages/HomePage.js
import React from "react";
import NewsFeed from "../components/NewsFeed/NewsFeed";

export default function HomePage() {
  return (
    <div>
      <h1>The Daily Prophet</h1>
      <NewsFeed />
    </div>
  );
}
