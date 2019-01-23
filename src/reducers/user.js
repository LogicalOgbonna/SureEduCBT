import { USER_LOGGED_IN } from "../actions/type";

const initialState = {
  user: {
    name: "Ogbonna Arinze",
    email: "arinze.ogbonna.198717@unn.edu.ng",
    role: "Coordinator"
  },

  isAuthenticated: true
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default user;
