import React from 'react';
// import Maincop from './maincop';
// import Refcomp from './refcomp';
// import Parentrefcomp from './parentrefcomp';
// import Forwardparentcomp from './forwardparentcomp';
// import Domportal from './domportal';
import Acomp from './context/acomp';
import {UserSend} from './context/contextM';
const Day4 = () => {
    const obj = {
        usr:'Rk power',
        pwd:'Cr38RM'
    }
    return (
        <div>
            {/* <Maincop /> */}
            {/* <Refcomp /> */}
            {/* <Parentrefcomp /> */}
            {/* <Forwardparentcomp /> */}
            {/* <Domportal /> */}
            <UserSend value={obj}>
                <Acomp />
            </UserSend>
               
        </div>
    );
}

export default Day4;
