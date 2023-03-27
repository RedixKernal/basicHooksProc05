import React , {useState , useEffect} from 'react';
import Axios from 'axios'
const Axios1 = () => {
    const [emp, setEmp] = useState([]);
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            setEmp(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
   
    return (
        <div>
            <ul>
            {
                emp.map(e =>{
                    // console.log(e)
                    return (
                        
                    <ol key={e.id}>
                        <li>name : {e.name}</li>
                        <li>email : {e.email}</li>
                        <li>phone : {e.phone}</li>
                        <li>id : {e.id}</li>
                        <li>username : {e.username}</li>
                        <li>website : {e.website}</li>
                        ------------------------------
                    </ol>
                    )
                })
            }
            </ul>
            {/* <h2>Day7 axios1</h2> */}
        </div>
    );
}

export default Axios1;
