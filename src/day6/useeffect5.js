import React,{useState , useEffect} from 'react';

const Useeffect5 = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
       let int = setInterval(() => {
        setTimer(timer+1);
       },1000)
        return () => {
            clearInterval(int)
        };
    }, [timer]);
    return (
        <div>
            <h2>Timer : {timer}</h2>
        </div>
    );
}

export default Useeffect5;
