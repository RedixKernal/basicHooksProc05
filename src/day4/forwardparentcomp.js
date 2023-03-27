import React, { Component } from 'react';
import Forwaredcomp from './forwaredcomp';
class Forwardparentcomp extends Component {
    constructor(props) {
        super(props);
        
        this.intRef = React.createRef();
    }
    eventHandler = () => {
        this.intRef.current.focus();
    }
    render() {
        return (
            <div>
                <Forwaredcomp ref={this.intRef} />
                <input type="button" value="getFocused" onClick={this.eventHandler}/>
            </div>
        );
    }
}

export default Forwardparentcomp;
