import React , { Component } from 'react';

class Destructuringclass extends Component {
render() {
    let {ename ,esal} = this.props;

    return (
        <div>
        <p><b>Employee Name : </b> {ename}</p>
        <p><b>Employee Name : </b> {this.props.eid}</p>
        <p><b>Employee Name : </b> {this.props.eadd}</p>
        <p><b>Employee Name : </b> {esal}</p>
        </div>
    );
}
}
export default Destructuringclass;