import React ,{useState} from 'react';

const Usestate3 = () => {
    const [person,setPerson] = useState({
        name:'',
        id:'',
        salary:'',
        designation:'',
        address:''
    })
    return (
        <div>
            <lablel>Name : </lablel><br />
            <input type="text" onChange={e => setPerson({...person , name:e.target.value})} value={person.name}/><br />
            <lablel>Id : </lablel><br />
            <input type="text" onChange={e=>setPerson({...person , id:e.target.value})} value={person.id}/><br />
            <lablel>Salary : </lablel><br />
            <input type="text" onChange={e=>setPerson({...person , salary:e.target.value})} value={person.salary}/><br />
            <lablel>Designation : </lablel><br />
            <input type="text" onChange={e=>setPerson({...person , designation:e.target.value})} value={person.designation}/><br />
            <lablel>Address : </lablel><br />
            <input type="text" onChange={e=>setPerson({...person , address:e.target.value})} value={person.address}/><br />
       
           
            <h3><p> -----------------------
                | Employee Details |
                -----------------------
                </p></h3>
            
            <p>| Name : {person.name}</p>
            <p>| Id : {person.id}</p>
            <p>| Salary : {person.salary}</p>
            <p>| Designation : {person.designation}</p>
            <p>| Address : {person.address}</p>
            -------------------------
        
        </div>
    );
}

export default Usestate3;
