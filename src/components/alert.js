import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  alertType = n => {
    switch (n) {
      case 1: {
        return (
          <div className="alert alert-success" role="alert">
            You have successfully login !!!!!!!
          </div>
        );
      }
      default: {
        <div className="alert alert-success" role="alert">
          You have successfully login !!!!!!!
        </div>;
      }
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col-8">
          {" "}
          {this.props.alert ? this.alertType(this.props.alert) : null}
        </div>
      </div>
    );
  }
}

export default Alert;
