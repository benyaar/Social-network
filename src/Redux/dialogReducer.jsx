export const addMessageActionCreater = (newMessageBody) => {
  return {
    type: "ADDMESSAGE",
    newMessageBody
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

};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDMESSAGE": {
      let newMessage = action.newMessageBody;
     

      return {
        ...state,
        messageData: [...state.messageData, { id: 7, message: newMessage }],
        
      };
    }

    default:
      return state;
  }
};
export default dialogReducer;
