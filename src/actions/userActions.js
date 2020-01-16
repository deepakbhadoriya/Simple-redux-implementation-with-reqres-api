//all the function for operations goes here
import { LOGIN_USER, REGISTER_USER, ERROR } from "./types";
import axios from "axios";

export const loginUser = loginData => dispatch => {
  axios
    .post("https://reqres.in/api/login", loginData)
    .then(res => dispatch({ type: LOGIN_USER, payload: res.data.token }))
    .catch(err =>
      dispatch({ type: ERROR, payload: "Enter valid login Detail" })
    );
};

export const registerUser = registerData => dispatch => {
  axios
    .post("https://reqres.in/api/register", registerData)
    .then(res => dispatch({ type: REGISTER_USER, payload: res.data }))
    .catch(err =>
      dispatch({ type: ERROR, payload: "Enter valid Registration Details" })
    );
};
