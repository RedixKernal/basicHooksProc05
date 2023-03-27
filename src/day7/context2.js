import React from 'react';
import {name} from './day7';
const Context2 = () => {
    return (
        <div>
            <name.Consumer>
                {name => {
                    return(
                        <>
                        <p>Name : <b>{name}</b></p>
                        <p><b>Favourite Name : Name</b></p>
                        </>
                    );
                }}
            </name.Consumer>
        </div>
    );
}

export default Context2;
