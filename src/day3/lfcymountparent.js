import React, { Component } from 'react';
import Lfcymountchild from './lfcymountchild';
class Lfcymountparent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log("01 Lfcymountparent constructor called...")
    }
    
    static getDerivedStateFromProps(state,props){
        console.log("02 Lfcymountparent getDerivedStateFromProps called...")
        return null;
    }
    render() {
        return (
            <div>
                <Lfcymountchild/>
                 {console.log("03 Lfcymountparent render called...")}
            </div>
        );
       
    }
    componentDidMount(){
        console.log("04 Lfcymountparent componentDidMount called...")
    }
}

export default Lfcymountparent;
