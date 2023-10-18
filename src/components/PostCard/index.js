import "./index.css";
import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

const PostCard = ({ post }) => {
  const [likesCount, setLikesCount] = useState(post.likes_count);
  const [likedStatus, setLikedStatus] = useState(false);

  const isClicked = () => {
    setLikesCount((prev) => prev + 1);
    setLikedStatus(true);
  };
  const isUnClicked = () => {
    setLikesCount((prev) => prev);
    setLikedStatus(false);
  };
  console.log("likescount________", likesCount);
  console.log("liksttaussssst________", likedStatus);

  return (
    <div>
      <div className="card d-flex flex-column w-100 mt-2 ">
        <div className="d-flex">
          <img
            src={post.profile_pic}
            className="profile"
            alt={post.user_name}
          />

          <h5 className="font-weight-bold mt-3">{post.user_name}</h5>
        </div>
        <img
          src={post.post_details.image_url}
          className="w-100"
          alt={post.user_name}
        />
        <div className="d-flex">
          {likedStatus ? (
            <button onClick={isClicked}>
              <FcLike size={21} className="m-1" />
            </button>
          ) : (
            <button onClick={isUnClicked}>
              <BsHeart size={21} className="m-1" />
            </button>
          )}

          <FaRegComment size={21} className="m-1" />
          <BiShareAlt size={21} className="m-1" />
        </div>
        <p className="text-dark font-weight-bold m-2">{likesCount} Likes</p>
        <p className="m-2">{post.post_details.caption}</p>

        <p className="m-2">{`${post.comments[0].user_name} ${post.comments[0].comment}`}</p>
        <p className="m-2">{`${post.comments[1].user_name} ${post.comments[1].comment}`}</p>
        <p className="m-2 font-weight-bold">{post.created_at}</p>
      </div>
    </div>
  );
};

export default PostCard;
