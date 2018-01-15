import React from "react";

export default class Stage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: ""
    };
  }

  componentDidMount() {
    this.fetchCurrentStage();
    this.timer = setInterval(this.fetchCurrentStage.bind(this), 10000);
  }

  componentWillUnmount() {
    this.clearInterval(this.timer);
  }

  fetchCurrentStage() {
    fetch("http://188.226.164.164:12345/tt2/stage")
      .then(res => res.json())
      .then(json => {
        this.setState({ stage: json[0].message });
      });
  }

  render() {
    if (!this.state.stage) {
      return <h4>Loading current stage</h4>;
    }

    return <h4>Current stage: {this.state.stage}</h4>;
  }
}
