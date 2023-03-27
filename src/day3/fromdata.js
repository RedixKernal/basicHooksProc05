import React from 'react';

const Fromdata = (props) => {
  let {usr,pwd} = props;
    return (
        <div>
            <p><b>Username:</b> {usr}</p>
            <p><b>Password:</b> {pwd}</p>
        </div>
    );
}

export default Fromdata;
