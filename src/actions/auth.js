import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./type";

import setAuthorizationHeader from "../utils/setAuthorizationHeader";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = user => ({
  type: USER_LOGGED_OUT,
  user
});

export const login = user => dispatch => {
  // api.user.login(credentials).then(user => {
  //   localStorage.sureEduCBTJWT = user.token;
  //   setAuthorizationHeader(user.token);
  // dispatch(userLoggedIn(user));
  // });

  const data = {
    user: {
      name: "Ogbonna Arinze",
      email: "arinze.ogbonna.198717@unn.edu.ng",
      role: "Coordinator",
      isAuthenticated: true
    },

    candidate: {
      name: "Ifeanyi Agu",
      isAuthenticated: false
    }
  };

  localStorage.sureEduCBTJWT = "user.token";
  dispatch(userLoggedIn(data));
};

export const logout = () => dispatch => {
  localStorage.sureEduCBTJWT = "";
  dispatch(userLoggedOut({}));
};
