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

const dialogReducer = (state, action) => {
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
