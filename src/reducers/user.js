import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/type";

const initialState = {};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      console.log(action.user);
      return {
        ...state,
        user: action.user.user,
        candidate: action.user.candidate
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: {
          isAuthenticated: false
        },
        candidate: {
          isAuthenticated: false
        }
      };
    default:
      return state;
  }
};

export default user;
