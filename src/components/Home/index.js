import React from "react";
import Header from "../Header";
import Stories from "../Stories";
import Posts from "../Posts";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center bg-light">
        <Stories />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
