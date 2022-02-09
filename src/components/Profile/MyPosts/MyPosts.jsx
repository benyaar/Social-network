import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.changePost(text);
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
          onChange={onChangePost}
          value={props.newPostText}
        />
        <div className={s.buttonPost}>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
