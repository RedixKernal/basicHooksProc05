import React , {useContext} from 'react';
import Context2 from './context2';
import {name} from './day7';

const Context1 = () => {
    const name1 = useContext(name)
    return (
        <div>
            <p><b>Favourite Name : </b>{name1}</p>
            <Context2/>
        </div>
    );
}

export default Context1;
