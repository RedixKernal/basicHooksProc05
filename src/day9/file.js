import React, { Component } from 'react';

class File extends Component {
    
    
    render() {
        return (
           
            this.props.name !== 'a' 
            ? <h2>Name : {this.props.name}</h2> 
            : new Error()
        );
    }
}

export default File;