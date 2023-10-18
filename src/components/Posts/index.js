import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPostsApi } from "../../redux/action/authAction";

import Cookies from "js-cookie";
import "./index.css";
import PostCard from "../PostCard";

const Posts = () => {
  let posts = useSelector((state) => state.userposts);
  let dispatch = useDispatch();
  let jwtToken = Cookies.get("jwt_token");
  console.log("posts==00------", posts);
  useEffect(() => {
    dispatch(userPostsApi(jwtToken));
  }, []);
  return (
    <div className="">
      {posts && posts.map((e) => <PostCard key={e.post_id} post={e} />)}
    </div>
  );
};

export default Posts;
