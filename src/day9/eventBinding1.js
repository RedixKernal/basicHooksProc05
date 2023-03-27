import React, { Component } from 'react';

class EventBinding1 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username:'Rk_Power',
            toogle:true,
            a2:'-',
            a3:'--',
            a4:"---"
        };
        this.count = this.count.bind(this,60);
    }
    
    handle = () => {
        this.setState({
            username:'Enter name',
        })
    }
    handle1 = (val) => {
        this.setState({
            a2:val,
        })
    }

    count = (vl) =>{
        this.setState({
            a3:vl,
        })
    }
    handleR = (val3) => {
        this.setState({
            a4:val3,
        })
    }
    
    render() {
        return (
            <div>
                {this.state.toogle && <p><b>UserName : </b>{this.state.username}</p>}
                <button onClick={this.handle}>Click</button>

                {this.state.toogle && <p><b>Handler1data : </b>{this.state.a2}</p>}
                <button onClick={()=>this.handle1("Handler1data")}>Click</button>

                {this.state.toogle && <p><b>UserName : </b>{this.state.a3}</p>}
                <button onClick={this.count}>Click</button>

                {this.state.toogle && <p><b>UserName : </b>{this.state.a4}</p>}
                <button onClick={this.handleR.bind(this,'myrule')}>Click</button>
            </div>
        );
    }
}

export default EventBinding1;

/*
-> Component Mounting Phase

  == constructor
  == component DidMount
  == static getDerivedStateFromProps(nextProps,nextState) => null
  == render()
-----------------------------------------------------------------
  -> Component Update Phase
  
  == shouldComponentUpdate(nextProps,nextState) => true/false
  == getSnapShotBeforUpdate(prevProps,prevState) 
  == componentDidUpdate(prevProps,prevState)
  -----------------------------------------------------------------
  -> Component UnMounting Phase
 
  == componentWillUnmount
  ----------------------------------------------------------------------
   -> Component Error Phase
 
  == static getDerivedStateFromError()
  == componentDidCatch(error) => error
  ------------------------------------------------------------------------
*/ 