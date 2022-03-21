import React from "react";
import {
  addMessageActionCreater,
  changeMessageActionCreater,
} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import  {connect}  from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogPage.newMessageText,
    dialogData:  state.dialogPage.dialogData,
    messageData: state.dialogPage.messageData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreater());
    },
    changeMessage: (message) => {
      dispatch(changeMessageActionCreater(message));
    },
  };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)




