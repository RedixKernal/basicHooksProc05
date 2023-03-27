import React , {useState} from 'react';
import Useeffect3 from './useeffect3';

const Useeffect4 = () => {
    const [show , setShow] = useState(true);

    
    const setShow1 = () => {
        if(show){
            setShow(false)
        }
        else if(!show){
            setShow(true)
        }
    }
    return (
        <div>
            <button onClick={setShow1}>Hide</button>
            {show && <Useeffect3/>}
        </div>
    );
}

export default Useeffect4;
