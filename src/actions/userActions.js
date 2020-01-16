//all the function for operations goes here
import { LOGIN_USER, REGISTER_USER } from "./types";
import axios from "axios";

export const loginUser = loginData => dispatch => {
  axios
    .post("https://reqres.in/api/login", loginData)
    .then(res => dispatch({ type: LOGIN_USER, payload: res.data.token }));
};

export const registerUser = registerData => dispatch => {
  axios
    .post("https://reqres.in/api/register", registerData)
    .then(res => dispatch({ type: REGISTER_USER, payload: res.data }));
};
