import React,{useState} from 'react';
import Child from './child';

const Main = () => {
    const [dis, setdis] = useState(true);
    return (
        <div>
            <button onClick={() => setdis(!dis)}>Toogle</button>
            {
                dis && <Child/>
            }
            {/* <Child/> */}
        </div>
    );
}

export default Main;
