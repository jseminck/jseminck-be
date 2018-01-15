import React from "react";

export default class Commands extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flush: 1
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.flush.bind(this), 10000);
  }

  componentWillUnmount() {
    this.clearInterval(this.timer);
  }

  flush() {
    this.setState({ flush: Date.now() });
  }

  render() {
    return (
      <div>
        <img src={`http://188.226.164.164:12345/out.png?${Date.now()}`} />
      </div>
    );
  }
}
