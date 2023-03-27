import React, { Component } from 'react';


class Pcl_Methodasprops extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            result:0
        }
        this.method1 = this.method1.bind(this);
       
    }
    coun = 10;
    method1(){
        this.setState({
            result:"GET / Result : "+this.coun
        },()=>{
            this.coun += 30;
            alert('comunication component is deprecated...')
        });
        
    }
    render() {
        return (
            <div>
                <CclMethodasprops parentm={this.method1} myr={this.state.result}/>
            </div>
        );
    }
}

export default Pcl_Methodasprops;


class CclMethodasprops extends Component {
    render() {
        return (
            <div>
                <p><b>Result : </b>{this.props.myr}</p>
                <input type="button" value="click" onClick={this.props.parentm}/>
            </div>
        );
    }
}

// export default CclMethodasprops;
