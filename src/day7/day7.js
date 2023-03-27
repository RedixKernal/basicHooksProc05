import React from 'react';
import Context1 from './context1';
// import Axios1 from './axios1';
// import Axios2 from './axios2';
// import Axios3 from './axios3';
export const name = React.createContext();
const Day7 = () => {
    
    return (
        <div>
            {/* <Axios1/> */}
            {/* <Axios2/> */}
            {/* <Axios3/> */}
            <name.Provider value="Rk Power">
                <Context1/>
            </name.Provider>
        </div>
    );
}

export default Day7;
