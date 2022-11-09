import { useState,useEffect } from 'react';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import TableOperations from '../TableOperations/TableOperations';


export default function Main()
{
    const [employeeDetails, setEmployeeDetails] = useState([]) 
    const [employeeSkills, setSkills] = useState([])
    const [loader, setLoader] = useState(true)
    
    let getData = () => {
        fetch("data/employee.json")
            .then(res => res.json())
            .then(obj => {setEmployeeDetails(obj)})
    }
    let getSkills = () => {
        fetch("data/skills.json")
            .then(res => res.json())
            .then(obj => {setSkills(obj)})
        getData()
    }
    
  useEffect(getSkills,[])
  return(
    <main className='flexbox'>
        {/* <EmployeeData /> */}
        {/* <Skills /> */}
        <TableOperations />
        <div className='tableContainer'>
            {employeeDetails.length?(<EmployeeTable employeeDetails={employeeDetails} skills={employeeSkills}/>):null}
            {/* <EmployeeTable employeeDetails={employeeDetails} skills={employeeSkills}/> */}
        </div>
   </main>
  )
}