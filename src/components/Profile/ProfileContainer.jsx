import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatusThunk, getUserProfileThunk, updateStatusThunk} from "../../Redux/profileReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileThunk()
    this.props.getStatusThunk(3)

  }

  render() {

    return <Profile {...this.props}
                    profile={this.props.profile}
                    status = {this.props.status}
                    updateStatusThunk = {this.props.updateStatusThunk}/>;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})


export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk}),
    withAuthRedirect
)(ProfileContainer)





