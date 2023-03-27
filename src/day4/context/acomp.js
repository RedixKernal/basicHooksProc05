import React, { Component } from 'react';
import Bcomp from './bcomp';
class Acomp extends Component {
    render() {
        return (
            <div>
                <Bcomp />
            </div>
        );
    }
}

export default Acomp;
