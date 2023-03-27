import React, { Component } from 'react';

class ErrorBoundary extends Component {
     constructor(props) {
         super(props);
         this.state = {
             errorCheck:false
         }
     }
     static getDerivedStateFromError(E){
        return{
            errorCheck:true
        }
     }
     
    render() {
        
        if(this.state.errorCheck) return <b>Somthing Went Wrong</b>
        return this.props.children;
    }
}

export default ErrorBoundary;