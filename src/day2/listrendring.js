import React from 'react';

const Listrendring = () => {
    let person = [
        {
            name:'rk1',
            id:11012,
            sal:'30k',
            add:'adn23'
        },
        {
            name:'vk1',
            id:12034,
            sal:'20k',
            add:'adn40'
        },
        {
            name:'dk1',
            id:11056,
            sal:'28k',
            add:'adn03'
        }
    ]
   
    let s = person.map(element =>(
        <Listrendring1 key={element.id} person = {element}/>
    ))
    return <div>{s}</div>;
}

export default Listrendring;


const Listrendring1 = (props) => {
    return (
        <div>
            <p><b>EmpName : </b>{props.person.name}</p>
            <p><b>EmpId : </b>{props.person.id}</p>
            <p><b>EmpSal : </b>{props.person.sal}</p>
            <p><b>EmpAdd : </b>{props.person.add}</p>
            <p>--------------------------------</p>
    </div>
    );
}


