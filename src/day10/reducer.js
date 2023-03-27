import React , {useReducer} from 'react';

const reducer = (prevState, message) => {
    console.log("PrevState" , prevState);
    console.log("Message" , message);
    if(message === 'get'){
        
        return prevState+1;
    }
    if(message === 'get1'){
       
        return prevState-1;
    }
    
}
const Reducer1 = () => {
    const [reducer1, initialArg1] = useReducer(reducer, 0) 
   
    return (
        <div>
            Render : {reducer1}<br />
            <button onClick={() => initialArg1("get",)}>Click</button>
            <button onClick={() => initialArg1("get1")}>Click</button>
        </div>
    );
}

export default Reducer1;
