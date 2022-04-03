import React from "react";
import {
  addPostActionCreater,
  changePostActionCreater,
} from "../../../Redux/profileReducer";
import {connect} from "react-redux";

import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText)=> {dispatch(addPostActionCreater(newPostText))},

  
}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostsContainer;
