import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <div>
        <MyPosts
          postData={props.postData}
          dispatch={props.dispatch}
          newPostText={props.newPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
