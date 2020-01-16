import { LOGIN_USER, REGISTER_USER } from "../actions/types";

const initialState = {
  loginToken: null,
  registerToken: null,
  registerId: null,
  alert: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginToken: action.payload,
        alert: 1
      };
    case REGISTER_USER:
      return {
        ...state,
        registerToken: action.payload.token,
        registerId: action.payload.id,
        alert: 2
      };
    default:
      return state;
  }
}
