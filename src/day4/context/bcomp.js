import React, { Component } from 'react';
import Ccomp from './ccomp';
class Bcomp extends Component {
    render() {
        return (
            <div>
                <Ccomp />
            </div>
        );
    }
}

export default Bcomp;
