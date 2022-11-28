import { useState,useEffect } from 'react';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import Modal from '../Modal/Modal';
import TableOperations from '../TableOperations/TableOperations';


export default function Main()
{
    const [employeeDetails, setEmployeeDetails] = useState([]) 
    const [employeeSkills, setSkills] = useState([])
    const [loader, setLoader] = useState(true)
    // setLoader(false)
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
    const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(getSkills,[])
  console.log("Rendering main");
  return(
    <main className='flexbox'>
        <TableOperations />
        {/* <Modal /> */}
        <div className='tableContainer'>
            {employeeDetails.length?(<EmployeeTable setEmployeeDetails = {setEmployeeDetails} employeeDetails={employeeDetails} skills={employeeSkills}/>):null}
        </div>
   </main>
  )
}