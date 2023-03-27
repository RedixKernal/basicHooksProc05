import React ,{useState , useEffect} from 'react';

const Useeffect3 = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    useEffect(() => {
        console.log('useEffect - calling...');
        window.addEventListener('mousemove',method1);
        console.log('useEffect - called...');

        return () => {
             window.removeEventListener('mousemove',method1)
        }
    },[]);
    const method1 = (e) =>{
        console.log(`method1 - calling...`)
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div>
            <h2>X-Axis : {x}</h2>
            <h2>Y-Axis : {y}</h2>
        </div>
    );
}

export default Useeffect3;
