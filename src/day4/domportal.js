import ReactDOM from 'react-dom'
import React, { Component } from 'react';

class Domportal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                <h2>document portal</h2>
            </div>
        ,document.getElementById('titan'));
    }
}

export default Domportal;


