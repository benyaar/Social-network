import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };



  let postsElement = props.postData.map((p) => (
    <Post post={p.post} likesCount={p.likesCount} />
  ));

  return (
    <div>
      My posts
      <AddNewPostFormRedux onSubmit = {onAddPost}/>

      <div>{postsElement}</div>
    </div>
  );
};

const AddNewPostForm = (props)=> {
  return (
      <form onSubmit ={props.handleSubmit}>
        <div>
          <Field
              component ="textarea" name = "newPostText" placeholder= "Enter your post"
          />

        </div>
        <div className={s.buttonPost}>
          <button >Add Post</button>
        </div>
      </form>
  )
}
const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)






export default MyPosts;
