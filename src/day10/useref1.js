import React , {useEffect,useRef} from 'react';

const Useref1 = () => {
const eleFocus = useRef();
useEffect(() => {
    // console.error(eleFocus);
    eleFocus.current.focus();
},[])

    return (
        <div>
            <input type='text' ref={eleFocus}/>
        </div>
    );
}

export default Useref1;
