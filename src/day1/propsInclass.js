import React, { Component } from 'react';

class Propsinclass extends Component {
    render() {
        return (
            <div>
                <h1>Hi Welcome! To {this.props.name}'s World</h1>
                <p>This Phenomenon {this.props.old} time old in Inst...</p>
                {this.props.children}
            </div>
        );
    }
}

export default Propsinclass;
