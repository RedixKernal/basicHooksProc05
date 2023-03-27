import React , {useState} from 'react';

const Usestate4 = () => {
    const [listOfItems,setListOfItems] = useState([]);
    const clickHandler = () => {
        setListOfItems([...listOfItems,
            Math.floor(Math.random()*1000)])
    }
    return (
        <div>
            <button onClick={clickHandler}>Create_Item</button>
            <ul type='none'>
               { listOfItems.map((item,index) => (
                   <li key={index}>Item Count : {item}</li>
               ))}
            </ul>
        </div>
    );
}

export default Usestate4;
