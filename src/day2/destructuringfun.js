import React from 'react';

const Destructuringfun = (props) => {
    let {ename} = props;
    let {eid,eadd,} = props;
return(
    <div>
        <p><b>Employee Name : </b> {ename}</p>
        <p><b>Employee Name : </b> {eid}</p>
        <p><b>Employee Name : </b> {eadd}</p>
        <p><b>Employee Name : </b> {props.esal}</p>
    </div>
);

}
export default Destructuringfun;