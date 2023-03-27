import React,{useState} from 'react';

const Usesate2 = () => {
    const [info,setMethod] = useState(0);
  const setMethod1 = () => {
      for (let i = 0; i < 10; i++) {
          setMethod((prevState)=>{
             return prevState+1
          });
      }
  }
    return (
        <div>
              <h2>Click counts : {info}</h2>
              <input type="button" value="Reset" onClick={()=>setMethod(0)}/>
              <input type="button" value="Increment" onClick={()=>setMethod(prevState=>prevState+1)}/>
              <input type="button" value="Decrement" onClick={()=>setMethod(prevState=>prevState-1)}/>
              <input type="button" value="Interval-5" onClick={()=>setMethod(prevState=>prevState+5)}/>
              <input type="button" value="Interval-5 1" onClick={setMethod1}/>
        </div>
    );
}

export default Usesate2;
