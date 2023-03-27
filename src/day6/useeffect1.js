import React , {useState,useEffect} from 'react';

const Useeffect1 = () => {
     const [count, setCount] = useState(0);
     
     useEffect(() => {
       document.getElementById('ins').innerHTML = count;
     });
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Click</button>
            <b>Count : {count}</b>
            <h2 id='ins'>0</h2>
        </div>
    );
}

export default Useeffect1;
