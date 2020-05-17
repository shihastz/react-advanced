import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      displayName: "",
    };
  }

  inputSet = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveRegister = (e) => {
      e.preventDefault();
      var data = {
          username : this.state.username,
          password : this.state.password,
          display_name : this.state.displayName
      }
  }

  render() {
    return (
      <div className="container">
        <h2>Registration</h2>
        <form action="">
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              onChange={this.inputSet}
              name="username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="text"
              onChange={this.inputSet}
              name="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Display Name</label>
            <input
              type="text"
              onChange={this.inputSet}
              name="displayName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-info" onClick={this.saveRegister}>Register</button>
          </div>
          <p>{this.state.username}</p>
          <p>{this.state.password}</p>
          <p>{this.state.displayName}</p>
        </form>
      </div>
    );
  }
}
