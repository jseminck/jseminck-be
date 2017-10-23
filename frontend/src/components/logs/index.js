import React from "react";
import PropTypes from "prop-types";

export default class LogsView extends React.Component {
    static propTypes = {
        logs: PropTypes.array.isRequired,
    }

    render() {
        return (
            <table>
                <thead>
                    {this.renderTableHeader()}
                </thead>
                <tbody>
                    {this.props.logs.map(this.renderLog)}
                </tbody>
            </table>
        )
    }

    renderTableHeader() {
        return (
            <tr>
                <th>Endpoint</th>
                <th>Duration (ms)</th>
                <th>Timestamp</th>
            </tr>
        )
    }

    renderLog(log) {
        return (
            <tr key={log.id}>
                <td>{log.endpoint}</td>
                <td>{log.duration}</td>
                <td>{log.created}</td>
            </tr>
        )
    }
}