import React, { Component } from "react";
import Login from "./auth/login";
import RegisterUser from "./auth/registerUser";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Login></Login>
        <RegisterUser></RegisterUser>
      </div>
    );
  }
}

export default UserManage;
