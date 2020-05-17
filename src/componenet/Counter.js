import React, { Component } from "react";
//import PropTypes from "prop-types";
import {dynamicDecrement} from "../utils";
import Button from "./Button/Button";
export default class Counter extends Component {
  state = {
    counter: 0,
  };
  onIncrement = ()=> {
      this.setState({
          counter : this.state.counter+1
      })
  }
//   onDerement = ()=> {
//     this.setState({
//         counter : this.state.counter-1
//     })
// }
// check utils.js for decrement function

alertBox = (event) => (data) => {
  console.log(event)
  console.log(data)
}
  render() {
    return (
      <div>
        <h2>Simple Counter</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={(event) => dynamicDecrement(event, this)}>-</button>
        <Button className="" id="name" onClick={this.alertBox("haiii")}>show alert</Button>
      </div>
    );
  }
}
