import React, { Component } from "react";
import { connect } from "react-redux";

class LoginSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const token = localStorage.getItem("token");
    return token ? (
      <h1>You have successfully login</h1>
    ) : (
      (window.location = "/")
    );
  }
}

const mapStateToProps = state => ({
  token: state.posts.token
});

export default connect(mapStateToProps)(LoginSuccess);
