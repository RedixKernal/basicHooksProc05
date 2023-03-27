import React, { Component } from 'react';

class Refcomp extends Component {
    constructor(props) {
        super(props);
        
        this.ref = React.createRef();
    }
    methodRef = () => {
        this.ref.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.ref}/><br /><br />
                <button onClick={this.methodRef}>Child Click</button>
            </div>
        );
    }
}

export default Refcomp;
