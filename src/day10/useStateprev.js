import React , {useState} from 'react';

const Usestateprev = () => {
    const [state, setstate] = useState(0);
   const handler = () => {
        for(let k=0; k<10; k++){
            setstate((prevState) => {
                return prevState = prevState+1;
            },console.error(`${k} Error`));
            console.error(`${k} Error`)
        }
    }
    return (
        <div>
            <b>Count : {state}</b><br />
            <button onClick={handler}>Click-10</button>
            <button onClick={() => setstate(s => s+1)}>Click-1</button>
        </div>
    );
}

export default Usestateprev;
