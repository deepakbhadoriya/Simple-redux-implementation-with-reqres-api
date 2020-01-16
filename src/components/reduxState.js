import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxState extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h5>Login Token : {this.props.loginToken}</h5>
        <h5>Register Token : {this.props.registerToken}</h5>
        <h5>Register Id : {this.props.registerId}</h5>
        <h5>Error:{this.props.error}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginToken: state.posts.loginToken,
  registerToken: state.posts.registerToken,
  registerId: state.posts.registerId,
  error: state.posts.error
});

export default connect(mapStateToProps, {})(ReduxState);
