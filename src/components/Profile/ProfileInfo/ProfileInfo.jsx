import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div>
        <img src={props.profile.photos.large} />
      </div>
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.lookingForAJob}</div>
      <div>{props.profile.fullName}</div>
    </>
  );
};

export default ProfileInfo;
