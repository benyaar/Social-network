import React from "react";
import s from "./Post.module.css";

const Post = ({ post, likesCount }) => {
  return (
    <div className={s.item}>
      <img src="https://www.w3.org/TR/2000/NOTE-SVG-access-20000807/tiger.png" />
      {post}
      <div>
        <span>Like</span> {likesCount}
      </div>
    </div>
  );
};

export default Post;
