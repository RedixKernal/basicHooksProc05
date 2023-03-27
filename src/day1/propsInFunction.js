import React from 'react';

const Propsinfunction = (props) => {
    return (
        <div>
            <h1>Hi Welcome! To {props.name}'s World</h1>
            {props.children}
            <p>This Phenomenon {props.old} time old in Inst...</p>
        </div>
    );
}

export default Propsinfunction;
