import React from "react";
import {
  addMessageActionCreater,
  changeMessageActionCreater,
} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import  {connect}  from "react-redux";

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
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
