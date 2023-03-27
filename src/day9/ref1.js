import React from 'react';
import Ref2 from './ref2';

const Ref1 = () => {
    const nrf = React.createRef();
    const clickme = () => {
        nrf.current.focus();
    }
    return (
        <div>
            <Ref2 ref={nrf}/>
            <button onClick={clickme}>Click</button>
        </div>
    );
}

export default Ref1;
