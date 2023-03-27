import React from 'react';

const Functionevent = () => {
   let i =1;
    function addNamme(val){
        console.log('Redic_Kernal : '+val)
        i++;
    }
    return (
        <div>
            <button onClick={() => addNamme(i)}>Click</button>
        </div>
    );
}

export default Functionevent;
