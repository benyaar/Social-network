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
    case "ADDPOST": {
     


      return {
        ...state,
        postData: [...state.postData, { post: state.newPostText, likesCount: 39 } ],
        newPostText: ""
      }

    }
    case "CHANGEPOST":{
      debugger
      return {
        ...state,
        newPostText: action.post



      }
    }
    default:
      return state;
  }
};
export default profileReducer;
