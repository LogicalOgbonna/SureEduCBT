import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";

import setAuthorizationHeader from "../utils/setAuthorizationHeader";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const login = credentials => dispatch => {
  api.user.login(credentials).then(user => {
    localStorage.sureEduCBTJWT = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
  });
};