import axios from 'axios';
import React ,{useState , useEffect} from 'react';
import './fetch.css';
const Datafetching = () => {
    const [employee , setEmployee] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
             setEmployee(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    },[])

    
    return (
        <div className="empCard">
           {
               employee.map(empDat => {
                const empName = empDat?.name ?? "";
                const id = empDat?.id ?? 0;
                const email = empDat?.email ?? "";
                const {street,city,zipcode} = empDat?.address ?? "";
                const phone = empDat?.phone ?? "";
                const website = empDat?.website ?? "";
                const {name,catchPhrase,bs} = empDat?.company?? "";
                  return (
                  <div className="fetch_Container" key={empDat.id}>
                      <h3>Name : {empName}</h3>
                      <h1>ID : {id}</h1>
                      <div className="cus_address_container">
                          <div className="cus_Address">
                              <b>Home_Address: </b>
                              <p>Street: {street}</p>
                              <p>City: {city}</p>
                              <p>Zipcode: {zipcode}</p>
                          </div>
                          <div className="cus_Address">
                              <b>Office_Address: </b>
                              <p>: {name}</p>
                              <p>: {catchPhrase}</p>
                              <p>: {bs}</p>
                          </div>
                      </div>
                      <div className="cus_contact">
                          <h3>Email:{email}</h3>
                          <h4>Mobile : {phone}</h4>
                          <h4>Website : {website}</h4>
                      </div>
                  </div>
                  )
               })
           }
        </div>
    );
}

export default Datafetching;
