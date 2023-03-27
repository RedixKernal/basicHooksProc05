import React, { Component } from 'react';

class LifecycleUpdating extends Component {
    constructor(props){
        super(props);
        console.log('Constructor called...');
        console.log(props);
        this.state = {
            mname:0,
            id:45
        }
    }
   
    static getDerivedStateFromProps(nextProps,nextState) {
        console.log("getDerivedStateFromProps called...");
        console.log(nextProps,nextState);
        return null;
    }
    shouldComponentUpdate(nextProps , nextState){
        console.log('shouldComponentUpdate called...');
        console.log(nextProps , nextState);
        return true;
    }
    
    render() {
        console.log("Render Method called...");
        return (
            <div>
                <h2>Lifecycle Methods Rendered ::  {this.state.mname}</h2>
                <button onClick={() => this.setState({ mname:this.state.mname+1})}>Change</button>
            </div>
        );
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShotBeforUpdate called...');
        console.log(prevProps, prevState);
        return null;
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate called...');
        console.log(prevProps, prevState);
    }
    componentDidMount(){
        console.log("compentDidMount Called...")
        console.log(" ")
        console.log("----------------------------");
        console.log(" ")
    }
}

export default LifecycleUpdating;