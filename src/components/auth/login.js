import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/userActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const loginData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(loginData);

    //set interval as it take some time to get token from api
    setInterval(() => {
      localStorage.setItem("loginToken", this.props.loginToken);
    }, 500);
  };
  render() {
    return (
      <div className="col-md-5">
        <h3>Login Form</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginToken: state.posts.loginToken
});

export default connect(mapStateToProps, { loginUser })(Login);
