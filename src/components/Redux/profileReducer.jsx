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

const profileReducer = (state, action) => {
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
