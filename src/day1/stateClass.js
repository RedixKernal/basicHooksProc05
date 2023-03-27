import React, { Component } from 'react';

class Stateclass extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    incr(val1){
        this.setState(prevState =>({
            count:val1
        }));
    }
    i = 0;
    incr1 = (val)=>{
        for(var i = 0; i < 10; i++){
            this.i++;
            this.incr(val);  
        }
       
    }
    render() {
        return (
            <div>
                <p>count : {this.state.count}</p>
                <input type="button" value="Click" onClick={() => this.incr1(this.i)}/>
            </div>
        );
    }
}

export default Stateclass;
