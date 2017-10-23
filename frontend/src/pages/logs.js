import React from "react";
import LogsView from "../components/logs";

export default class LogsContainer extends React.Component {
    state = {
        logs: []
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:12345/logs");
        const { data: logs } = await response.json();

        this.setState({logs});
    }

    render() {
        return <LogsView logs={this.state.logs} />
    }
}