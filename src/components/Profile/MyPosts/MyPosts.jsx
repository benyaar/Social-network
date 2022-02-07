import React from "react";
import {
  addPostActionCreater,
  changePostActionCreater,
} from "../../Redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };
  let changePost = () => {
    let text = newPostElement.current.value;
    props.dispatch(changePostActionCreater(text));
  };

  let postsElement = props.postData.map((p) => (
    <Post post={p.post} likesCount={p.likesCount} />
  ));

  return (
    <div>
      My posts
      <div>
        <textarea
          ref={newPostElement}
          onChange={changePost}
          value={props.newPostText}
        />
        <div className={s.buttonPost}>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
