import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfileThunk} from "../../Redux/profileReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileThunk()
  }

  render() {

    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})


export default compose(
    connect(mapStateToProps, {getUserProfileThunk}),
    withAuthRedirect
)(ProfileContainer)





