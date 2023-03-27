import React, { Component } from 'react';

class Lfcupdate extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            Get:true,
            Date:'Excuted',
            Result:'Pass'
        }
        console.log("01 Lfcupdate constructor called...")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("02 Lfcupdate getDerivedStateFromProps called...");
        console.log(`state : ${state},props : ${props}`)
        return null;
    }
    shouldComponentUpdate(nextState,nextProps){
        console.log("04 Lfcupdate shouldComponentUpdate called...");
        console.log(nextState , nextProps)
        return true;
    }
    getSnapshotBeforeUpdate(prevState,prevProps){
        console.log("03 Lfcupdate getSnapBeforeStateFromProps called...");
        console.log(`prevstate : ${prevState},prevprops : ${prevProps}`)
        return true;
    }
  
    update1(){
        this.setState({
            Get:false
        })
    }
    update2(){
        this.setState({
            Get:false,
            Date:'NotExcuted',
        })
    }
    update3(){
        this.setState({
            Get:true,
            Date:'Excuted',
            Result:'Failed'
        })
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.update1()}>Update1</button>
                <button onClick={()=>this.update2()}>Update2</button>
                <button onClick={()=>this.update3()}>Update3</button>
                { console.log('05 Lfcupdate render called...')}
            </div>
        );
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log("06 Lfcupdate componentDidUpdate called...");
        console.log(`nextstate : ${prevProps},nextprops : ${prevState}`)
        return true;
    }
}

export default Lfcupdate;
