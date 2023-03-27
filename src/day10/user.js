import React , {useReducer} from 'react';
import Login from './logIn';
import SignIn from './signIn';
import './sd.css';

const reducer = (state, action) =>{
    console.log(state,action);
    switch(action){
        case true :
            return {
                _UserDisplay:'SignIn',
                _BooleanValue:false,
                _COMPONENT:<Login/>
            }
        case false : 
            return {
                _UserDisplay:'LogIn',
                _BooleanValue:true,
                _COMPONENT:<SignIn/>
            }    
        default :
            return {
                _UserDisplay:'SignIn',
                _BooleanValue:true,
                _COMPONENT:<Login/>
            }
    }
        
}
const User = () => {
        const [data,dispatch] = useReducer(reducer,{ 
            _UserDisplay:'SignIn',
            _BooleanValue:false,
            _COMPONENT:<Login/>
           });
    return (
        <div className="mainContainer">
            <button onClick={() => dispatch(data._BooleanValue)}>{data._UserDisplay}</button>
            <div className="childCon">
            {data._COMPONENT}
            </div> 
        </div>
    );
}

export default User;
