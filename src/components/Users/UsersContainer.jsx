import React from "react";
import {connect} from "react-redux";
import {
    follow,
    followThunkCreater,
    getUsersThunkCreater,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,
    unfollowThunkCreater,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunkCreater(pageNumber, this.props.pageSize)
    };


    render() {

        return (
            <>
                {
                    this.props.isFetching ? (
                        <Preloader/>
                    ) : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    getUsersThunkCreater={this.props.getUsersThunkCreater}
                    followingInProress={this.props.followingInProress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followThunkCreater={this.props.followThunkCreater}
                    unfollowThunkCreater={this.props.unfollowThunkCreater}


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
        followingInProress: state.usersPage.followingInProress,
    };
};

export default compose(
    withAuthRedirect,
    connect(
        mapStateToProps, {
            follow,
            unfollow,
            setCurrentPage,
            toggleIsFollowingProgress,
            getUsersThunkCreater,
            followThunkCreater,
            unfollowThunkCreater
        }))(UsersContainer)