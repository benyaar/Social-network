export const addMessageActionCreater = () => {
  return {
    type: "ADDMESSAGE",
  };
};
export const changeMessageActionCreater = (text) => {
  return {
    type: "CHANGEMESSAGE",
    message: text,
  };
};

let initialState = {
  dialogData: [
    { id: "1", name: "Artur" },
    { id: "2", name: "Alex" },
    { id: "3", name: "Artem" },
    { id: "4", name: "Andrei" },
  ],
  messageData: [
    { id: 1, message: "Karas" },
    { id: 2, message: "Hello" },
    { id: 3, message: "What" },
    { id: 4, message: "Pop" },
  ],
  newMessageText: "hello",
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDMESSAGE":
      let newMessage = {
        message: state.newMessageText,
      };
      state.messageData.push(newMessage);
      state.newMessageText = "";
      return state;
    case "CHANGEMESSAGE":
      state.newMessageText = action.message;
      console.log(action.message);
      return state;
    default:
      return state;
  }
};
export default dialogReducer;
