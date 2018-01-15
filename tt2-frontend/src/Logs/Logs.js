import React from "react";

export default class Logs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    this.fetchLogs();
    this.timer = setInterval(this.fetchLogs.bind(this), 10000);
  }

  componentWillUnmount() {
    this.clearInterval(this.timer);
  }

  fetchLogs() {
    fetch("http://188.226.164.164:12345/tt2/log")
      .then(res => res.json())
      .then(json => {
        this.setState({ logs: json });
      });
  }

  render() {
    if (this.state.logs.length === 0) {
      return <div>Loading logs</div>;
    }

    return (
      <div style={{ textAlign: "left" }}>
        {this.state.logs.map(log => <div key={log.id}>{log.message}</div>)}
      </div>
    );
  }
}
