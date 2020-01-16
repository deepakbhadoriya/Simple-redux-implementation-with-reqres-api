import React, { Component } from "react";
import Login from "./auth/login";
import RegisterUser from "./auth/registerUser";
import ReduxState from "./reduxState";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ReduxState></ReduxState>
        <Login></Login>
        <RegisterUser></RegisterUser>
      </div>
    );
  }
}

export default UserManage;
