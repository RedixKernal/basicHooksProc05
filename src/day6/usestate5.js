import React ,{useState} from 'react';

const Usestate5 = () => {
    const [Employee, setEmployeeDetails] = useState([]);
    const employeeDetails = (e) => {
        setEmployeeDetails([...Employee,{
            Name:e.target[0].value,
            Id:e.target[1].value,
            Salary:e.target[2].value,
            Designation:e.target[3].value,
            Address:e.target[4].value
        }])
        e.preventDefault();
    }
    return (
        <div>
            
            <form onSubmit={employeeDetails}>
            <label>Name : </label><br />
            <input type="text" /><br />
            <label>Id : </label><br />
            <input type="text"/><br />
            <label>Salary : </label><br />
            <input type="text" /><br />
            <label>Designation : </label><br />
            <input type="text" /><br />
            <label>Address : </label><br />
            <input type="text" /><br /><br />
            <input type="submit" value="Add Employee Details" />
            </form>
           
        <div>
            <p>------------------------------------------------------------------------</p>
            <b><p>============== Employee Details ==============</p></b>
            {
                Employee.map((employee,index) =>(
                  
                    <React.Fragment key={index}>
                        <p>==========================================</p>
                        <p><b>Name : </b>{employee.Name}</p>
                        <p><b>Id : </b>{employee.Id}</p>
                        <p><b>Salary : </b>{employee.Salary}</p>
                        <p><b>Designation : </b>{employee.Designation}</p>
                        <p><b>Address : </b>{employee.Address}</p>
                        <p>==========================================</p>
                       
                    </React.Fragment>
                ))
            }
            </div>
        </div>
    );
}

export default Usestate5;
