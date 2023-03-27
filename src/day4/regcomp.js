import React, { Component } from 'react';

class Regcomp extends Component {
    render() {
        console.log("*****RegClass Component Excuted*****")
        console.log("--------------------------------")
        return (
            <div>
                <p><b>Com Excuted : </b>{this.props.ad}</p>
            </div>
        );
    }
}

export default Regcomp;
