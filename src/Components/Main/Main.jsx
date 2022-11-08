import { useState,useEffect } from 'react';
import EmployeeData from '../../MockAPI/EmployeeDetails';
import Skills from '../../MockAPI/Skills';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import TableOperations from '../TableOperations/TableOperations';


export default function Main()
{
    const [employeeDetails, setEmployeeDetails] = useState([]) 
    const [employeeSkills, setSkills] = useState([])
    
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
            <EmployeeTable employeeDetails={employeeDetails} skills={employeeSkills}/>
        </div>
   </main>
  )
}