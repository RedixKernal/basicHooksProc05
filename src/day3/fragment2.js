import React, { Component } from 'react';

class Fragment2 extends Component {
    render() {
        return (
            <React.Fragment>
                <td>{this.props.name}</td>
                <td>{this.props.id}</td>
                <td>{this.props.salary}</td>
            </React.Fragment>
        );
    }
}

export default Fragment2;
