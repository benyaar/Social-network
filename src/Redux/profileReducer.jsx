import {userAPI} from "../API/api";

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
export const setUserProfile = (profile) => {
    return {
        type: "SET_USER_PROFILE",
        profile,
    };
};

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        userAPI.getProfile().then((response) => {
                dispatch(setUserProfile(response.data))})
    }
}


let initialState = {
    postData: [
        {post: "Hello. I am Artur", likesCount: 50},
        {post: "What are you doing?", likesCount: 39},
        {post: "What are you doing?", likesCount: 39},
        {post: "What are you doing?", likesCount: 39},
        {post: "What are you doing?", likesCount: 39},
        {post: "What are you doing?", likesCount: 39},
    ],
    newPostText: "it kamas",
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDPOST": {
            return {
                ...state,
                postData: [
                    ...state.postData,
                    {post: state.newPostText, likesCount: 39},
                ],
                newPostText: "",
            };
        }
        case "CHANGEPOST": {

            return {
                ...state,
                newPostText: action.post,
            };
        }
        case "SET_USER_PROFILE": {

            return {
                ...state,
                profile: action.profile,
            };
        }
        default:
            return state;
    }
};
export default profileReducer;
