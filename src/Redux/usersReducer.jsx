import {userAPI} from "../API/api";

let initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProress: []
};



const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case "SET_USERS": {
      return {
        ...state,
        users: action.users,
      };
    }
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case "SET_TOTAL_USERS_COUNT": {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case "SET_TOGGLE": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case "TOGGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProress: action.isFetching
        ? [...state.followingInProress,action.userId]
            : state.followingInProress.filter(id => id != action.userId)
      };
    }

    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: "FOLLOW",
    userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: "UNFOLLOW",
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: "SET_CURRENT_PAGE",
    currentPage,
  };
};
export const setTotalUsersCount = (count) => {
  console.log(count);
  return {
    type: "SET_TOTAL_USERS_COUNT",
    count,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: "SET_TOGGLE",
    isFetching,
  };
};
export const toggleIsFollowingProgress = (isFetching, userId) => {
  return {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
  };
};

export const getUsersThunkCreater = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    userAPI.getUsers(currentPage, pageSize)
        .then((data) => {
          dispatch(setIsFetching(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalUsersCount(data.totalCount))
        });
  }
}

export const followThunkCreater = (userId) => {
  return (dispatch) => {
    dispatch (toggleIsFollowingProgress(true, userId))
    userAPI.follow(userId)

        .then((response) => {
          if (response.data.resultCode === 0) {
           dispatch(follow(userId));
          }
          dispatch(toggleIsFollowingProgress(false, userId))
        });
  }
}

export const unfollowThunkCreater = (userId) => {
  return (dispatch) => {
    dispatch (toggleIsFollowingProgress(true, userId))
    userAPI.unfollow(userId)

        .then((response) => {
          if (response.data.resultCode === 0) {
            dispatch(unfollow(userId));
          }
          dispatch(toggleIsFollowingProgress(false, userId))
        });
  }
}


export default usersReducer;
