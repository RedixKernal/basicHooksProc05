import React , {useState,useEffect,useRef} from 'react';


const Useref2 = () => {
    const tController = useRef(null);
    const [HH, setHH] = useState(0);
    const [MM, setMM] = useState(0);
    const [SS, setSS] = useState(0);
    const [MS, setMS] = useState(0);
    useEffect(() => {
        tController.current = setInterval(() => {
            setMS(M => M+1);
            if(MS === 999){
                setMS(0);
                setSS(S => S+1);
                if(SS === 59){
                    setSS(0);
                    setMM(MI => MI+1);
                    if(MM === 59){
                        setMM(0);
                        setHH(H => H+1);
                        if(HH === 23){
                            setHH(0);
                            setMM(0);
                            setSS(0);
                            setMS(0);
                        }
                    }
                }
            }
        },1);
    });
    const clickHandler = () => {
      clearInterval(tController.current);
    }
    return (
        <div>
            <b>{HH}: {MM} : {SS} : {MS}</b><br />
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default Useref2;
