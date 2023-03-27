import React, { Component } from 'react';

class Lfcymountchild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        console.log("01 Lfcymountchild constructor called...")
    }
    
    static getDerivedStateFromProps(state,props){
        console.log("02 Lfcymountchild getDerivedStateFromProps called...")
        return null;
    }
    render() {
        return (
            <div>
                 {console.log("03 Lfcymountchild render called...")}
            </div>
        );
       
    }
    componentDidMount(){
        console.log("04 Lfcymountchild componentDidMount called...")
    }
}


export default Lfcymountchild;
