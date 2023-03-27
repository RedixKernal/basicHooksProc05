import React, { Component } from 'react';

class Classevent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter Name',
        }
        // this.show = this.show.bind(this);
    }
    show() {
        this.setState({name: 'Redic_kernal'})
    }

    show1 = () => {
        this.setState({name: 'Redic_kernal arrow'})
    }
    showpre = () =>{
        this.setState((prevState)=>({
            name: prevState.name
        }
        
        ))
    }
    render() {
        return (
            <div>
                <p><b>Enter Name : </b> {this.state.name}</p>
                {/* <input type="button" value="Get" onClick={this.show.bind(this)}/> */}
                {/* <input type="button" value="Get" onClick={this.show}/> */}
                <input type="button" value="Previes" onClick={this.showpre}/>
                <input type="button" value="Get" onClick={this.show1}/>
                <input type="button" value="Get" onClick={() => this.show()}/>
            </div>
        );
    }
}

export default Classevent;
