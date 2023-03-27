import React, { Component } from 'react';
import Refcomp from './refcomp';
class Parentrefcomp extends Component {
    constructor(props) {
        super(props);
        this.pref = React.createRef();
    }
    parentref = () => {
        this.pref.current.methodRef()
    }
    render() {
        return (
            <div>
                <Refcomp ref={this.pref}/>
                <br />
                <button onClick={this.parentref}>Parent Click</button><br />
            </div>
        );
    }
}

export default Parentrefcomp;
