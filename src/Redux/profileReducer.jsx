export const addPostActionCreater = () => {
  return {
    type: "ADDPOST",
  };
};
export const changePostActionCreater = (text) => {
  return {
    type: "CHANGEPOST",
    post: text,
  };
};

let initialState = {
  
  postData: [
    { post: "Hello. I am Artur", likesCount: 50 },
    { post: "What are you doing?", likesCount: 39 },
    { post: "What are you doing?", likesCount: 39 },
    { post: "What are you doing?", likesCount: 39 },
    { post: "What are you doing?", likesCount: 39 },
    { post: "What are you doing?", likesCount: 39 },
  ],
  newPostText: "it kamas",

}




const profileReducer = (state = initialState , action) => {
  switch (action.type) {
    case "ADDPOST":
      let newPost = {
        post: state.newPostText,
        likesCount: 2,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case "CHANGEPOST":
      state.newPostText = action.post;
      console.log(action.post);
      return state;
    default:
      return state;
  }
};
export default profileReducer;
