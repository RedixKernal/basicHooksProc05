import React , {useReducer} from 'react';

const Usereducer1 = () => {
    const [count , dispatch] = useReducer((state, action)=>{
        if(action === 'incr'){
            return state + 1;
        }
        else if(action === 'decr'){
            return state - 1;
        }
        else{
            return state = 0;
        }
    },0)
    return (
        <div>
            <h2>count : {count}</h2>
            <button onClick={()=> dispatch('incr')}>Increment</button>
            <button onClick={()=> dispatch('decr')}>Decrement</button>
            <button onClick={()=> dispatch('rst')}>Reset</button>
        </div>
    );
}

export default Usereducer1;


