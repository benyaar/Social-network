import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
} from "../../Redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";

import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          this.props.currentPage
        }&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
        console.log(response);;
        
        
        
      
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${
          this.props.pageSize
        }`
      )
     
      .then((response) => {this.props.setUsers(response.data.items)
      this.props.setIsFetching(false)});
   
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
         <Preloader/>
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};


export default connect(
  mapStateToProps,{
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching}





)(UsersContainer);
