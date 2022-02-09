import React from "react";
import { addMessageActionCreater, changeMessageActionCreater } from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  
  let addMessage =()=> {
  props.store.dispatch(addMessageActionCreater())
}
  let changeMessage =(message)=> {
    props.store.dispatch(changeMessageActionCreater(message))
}

  return (
      <Dialogs addMessage = {addMessage}
      changeMessage = {changeMessage}
      newMessageText = {props.store.getState().dialogPage.newMessageText}
      dialogData = {props.store.getState().dialogPage.dialogData}
      messageData = {props.store.getState().dialogPage.messageData}
      />
    
  );
};

export default DialogsContainer;
