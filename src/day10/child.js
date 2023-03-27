import React ,{useState,useEffect} from 'react';

const Child = () => {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const axis = event =>{
        console.log('event');
        setX(event.clientX);
        setY(event.clientY)
    }
    useEffect(() => {
        console.error("Child.js Component monted")
        window.addEventListener('mousemove', axis )
        return () => {
            console.error("Child.js Component Unmonted")
            window.removeEventListener('mousemove', axis)
        }
    },[])
    return (
        <div>
            <b>X: {X} - Y:{Y}</b>
        </div>
    );
}

export default Child;
