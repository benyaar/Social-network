import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElement = props.dialogData.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));
  let messagesElement = props.messageData.map((m) => (
    <Message message={m.message} />
  ));
  let onAddMessage =()=> {
  props.addMessage()
}
  let onChangeMessage =(e)=> {
    let message = e.target.value
    props.changeMessage(message)
}


  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
      <div className={s.buttons}>
        <textarea onChange={onChangeMessage} 
        value = {props.newMessageText}/>
        <div>
          <button onClick={onAddMessage}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
