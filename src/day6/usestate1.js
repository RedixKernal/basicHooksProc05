import React,{useState} from 'react';

const Usesate1 = () => {
    const [info,setMethod] = useState(0);
    var i = 0;
    const method = () => {
        i+=10;
        setMethod(info+i);
    }
    return (
        <div>
              <h2>Click counts : {info}</h2>
              <input type="button" value="Click" onClick={method}/>
        </div>
    );
}

export default Usesate1;
