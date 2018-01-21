import React from "react";

export default class Commands extends React.Component {
  render() {
    return (
      <div>
        <img src={`http://188.226.164.164:12345/out.png?${Date.now()}`} />
      </div>
    );
  }
}
