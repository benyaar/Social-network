import {profileAPI, userAPI} from "../API/api";


let initialState = {
    postData: [
        {post: "Hello. I am Artur", likesCount: 50},
        {post: "What are you doing?", likesCount: 39},
        {post: "What are you doing?", likesCount: 39},
        {post: "What are you doing?", likesCount: 39},
        {post: "What are you doing?", likesCount: 39},
        {post: "What are you doing?", likesCount: 39},
    ],

    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDPOST": {
            return {
                ...state,
                postData: [
                    ...state.postData,
                    {post: action.newPostText, likesCount: 39},
                ],
                newPostText: "",
            };
        }

        case "SET_USER_PROFILE": {

            return {
                ...state,
                profile: action.profile,
            };
        }
        case "SET_STATUS": {

            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreater = (newPostText) => {
    return {
        type: "ADDPOST",
        newPostText
    };
};

export const setUserProfile = (profile) => {
    return {
        type: "SET_USER_PROFILE",
        profile,
    };
};
export const setStatus = (status) => {
    return {
        type: "SET_STATUS",
        status,
    };
};


export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile().then((response) => {
            dispatch(setUserProfile(response.data))})
    }
}
export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {
                dispatch(setStatus(response.data))
          })
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;
