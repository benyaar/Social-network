import React from "react";
import { addMessageActionCreater, changeMessageActionCreater } from "../Redux/dialogReducer";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogData.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));
  let messagesElement = props.messageData.map((m) => (
    <Message message={m.message} />
  ));
  let addMessage =()=> {
  props.dispatch(addMessageActionCreater())
}
  let changeMessage =(e)=> {
    let message = e.target.value
    props.dispatch(changeMessageActionCreater(message))
}

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
      <div className={s.buttons}>
        <textarea onChange={changeMessage} 
        value = {props.newMessageText}/>
        <div>
          <button onClick={addMessage}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
