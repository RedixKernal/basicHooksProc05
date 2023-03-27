import React , {useState , useEffect} from 'react';

const Useeffect2 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(()=>{
        console.log("use effect called...");
        document.title = `Count : ${count}`
    },[count])
    return (
        <div>
            <input type='text' onChange={e => setName(e.target.value)} value={name}/>
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
            <h3>{name}</h3>
        </div>
    );
}

export default Useeffect2;
