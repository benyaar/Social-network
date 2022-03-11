import React from "react";
import { NavLink } from "react-router-dom";
import "./Users.css";

const Users = (props) => {
  
  let pageCount = props.totalUsersCount / props.pageSize;
  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && "selectedPage"}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        return  <div>
          <div>
            <NavLink to = {'/Profile/' + u.id}>
            <img
              className="photo"
              src={
                u.photos.small != null
                  ? u.photos.small
                  : "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"
              }
              alt=""
            />
            
            </NavLink>
            
          </div>
          <div>{u.name}</div>
          {/* <div>{u.location.city}</div>
          <div>{u.location.country}</div> */}
          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Unfollow
              </button>
            )}    
          </div>
        </div>
   } )}
    </div>
  );
};

export default Users;
