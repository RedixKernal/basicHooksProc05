import React from 'react';

import Hello from './functionBasedComponent';
import { ClassBased } from './classBasedComponent';
import NonJsx from './nonJsx';
import Propsinclass from './propsInclass';
import Propsinfunction from './propsInFunction';
import Stateclass from './stateClass';

const day1 = () => {
    return (
        <div>
            <Hello/>
            <ClassBased/>
            <NonJsx/>
            
            <Propsinclass name='RkPwr' old='400RD'/>
            <Propsinclass name='VkPwr' old='160RD'/>
            <Propsinclass old='20RD'>
            <span>hi split with<b> : blod matter</b></span>
            <p>am child 2 of ele</p>
            </Propsinclass>
            
            <Propsinfunction name='RkPwr_fun' old='400RD'>
            <span>hi split with<b> : blod matter</b></span>
            <p>am child 2 of ele</p>
            </Propsinfunction>
            <Propsinfunction name='VkPwr_fun' old='160RD'/>
            <Propsinfunction old='20RD'/>
            <Stateclass/>
        </div>
    );
}

export default day1;

