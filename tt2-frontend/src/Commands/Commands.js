import React from "react";

export default class Commands extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commands: []
    };
  }

  componentDidMount() {
    this.fetchCommands();
    this.timer = setInterval(this.fetchCommands.bind(this), 10000);
  }

  componentWillUnmount() {
    this.clearInterval(this.timer);
  }

  fetchCommands() {
    fetch("http://188.226.164.164:12345/tt2/commands/all")
      .then(res => res.json())
      .then(json => {
        this.setState({ commands: json });
      });
  }

  render() {
    if (this.state.commands.length === 0) {
      return <div>Loading logs</div>;
    }

    return (
      <div>
        {this.state.commands.map(command => (
          <div key={command.id}>{command.command}</div>
        ))}
      </div>
    );
  }
}
