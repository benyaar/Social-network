import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {Field, Form, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let dialogsElement = props.dialogData.map((d) => (
        <Dialog name={d.name} id={d.id}/>
    ));
    let messagesElement = props.messageData.map((m) => (
        <Message message={m.message}/>
    ));



    let addNewMessage = (values) => {

        props.addMessage(values.newMessageBody);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElement}</div>
            <div className={s.messages}>{messagesElement}</div>
            <div className={s.buttons}>
                <AddMessageFormRedux onSubmit ={addNewMessage} />
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit ={props.handleSubmit}>
            <div>
                <Field component ="textarea" name = "newMessageBody" placeholder= "Enter your message"/>
            </div>

            <div>
                <button >Add Post</button>
            </div>

        </form>

    )
}

const AddMessageFormRedux = reduxForm ({form: " dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
