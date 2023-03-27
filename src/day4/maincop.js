import React, { Component } from 'react';

import Purecomp from './purecomp';
import Regcomp from './regcomp';
import Purefuncomp from './purefuncomp';
import Funcomp from './funcomp';
class Maincop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myres:'Get/access'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                myres:'Get/access'
            })
        },2000)
    }
    render() {
        console.log("*****main Component Excuted*****")
        console.log("--------------------------------")
        return (
            <div>
                <Purecomp ad={this.state.myres} />
                <Regcomp ad={this.state.myres} />
                <Purefuncomp ad={this.state.myres} />
                <Funcomp ad={this.state.myres} />
            </div>
        );
    }
}

export default Maincop;
