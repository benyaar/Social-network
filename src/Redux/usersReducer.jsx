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

let initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
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

    default:
      return state;
  }
};
export default usersReducer;
