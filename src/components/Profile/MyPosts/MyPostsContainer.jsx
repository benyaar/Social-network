import React from "react";
import {
  addPostActionCreater,
  changePostActionCreater,
} from "../../../Redux/profileReducer";

import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
  };
  let changePost = (text) => {
    props.store.dispatch(changePostActionCreater(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      changePost={changePost}
      postData={props.store.getState().profilePage.postData}
      newPostText={props.store.getState().profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
