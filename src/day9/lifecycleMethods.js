import React, { Component } from 'react';

class LifecycleMethods extends Component {
    constructor(props){
        super(props);
        console.log(props);
        console.log('Constructor called...')
        this.state = {
            name:'redical',
            id:45
        }
    }
    static getDerivedStateFromProps(props=null,state=null) {
        console.log(props,state)
        console.log("getDerivedStateFromProps called...");
        return null;
    }
    render() {
        console.log("Render Method called...");
        return (
            <div>
                <h2>Lifecycle Methods Rendered</h2>
                <button onClick={() => this.setState({ name: 'find'})}>Change</button>
            </div>
        );
    }
    componentDidMount(){
        console.log("compentDidMount Called...")
    }
}

export default LifecycleMethods;