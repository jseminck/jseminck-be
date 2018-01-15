import React from "react";

export default class Action extends React.Component {
  executeAction() {
    fetch("http://188.226.164.164:12345/tt2/commands", {
      method: "POST",
      body: JSON.stringify({
        command: this.props.command
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  }

  render() {
    return (
      <button
        className="btn btn-primary"
        style={{ margin: 10 }}
        onClick={this.executeAction.bind(this)}
      >
        {this.props.name}
      </button>
    );
  }
}
