import React, { Component } from "react";

export default class Message extends Component {
  state = { msg: "hgfhgf" };
  onButton = () => {
    this.setState({ msg: "new message" });
  };
  render() {
    const { msg } = this.state;
    console.log(msg);
    return (
      <div>
        {msg}
        <button onClick={this.onButton}>Button</button>
      </div>
    );
  }
}
