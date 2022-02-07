import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
  rerenderEntireTree() {
    console.log("was changed");
  },
  state: {
    profilePage: {
      postData: [
        { post: "Hello. I am Artur", likesCount: 50 },
        { post: "What are you doing?", likesCount: 39 },
        { post: "What are you doing?", likesCount: 39 },
        { post: "What are you doing?", likesCount: 39 },
        { post: "What are you doing?", likesCount: 39 },
        { post: "What are you doing?", likesCount: 39 },
      ],
      newPostText: "it kamas",
    },
    dialogPage: {
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
    },
  },
  dispatch(action) {
    profileReducer(this.state.profilePage, action);
    dialogReducer(this.state.dialogPage, action);
    this.rerenderEntireTree(this.state);
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
};

export default store;
