import { useState,useEffect } from 'react';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import ConfirmDeleteModal from '../Modal/ConfirmDelete';
import Modal from '../Modal/Modal';
import TableOperations from '../TableOperations/TableOperations';


export default function Main()
{
    const [employeeDetails, setEmployeeDetails] = useState([]) 
    const [employeeSkills, setSkills] = useState([])
    const [loader, setLoader] = useState(true)
    const [deleteModal,setDeleteModal]=useState([0,false])
    const closeModal = (event) => {
        setDeleteModal(!deleteModal)
        setIsModalOpen(false)
    }
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
    console.log(deleteModal);
    const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(getSkills,[])
  console.log("Rendering main");
  let tempArray = [...employeeDetails]
  return(
    <main className='flexbox'>
        <TableOperations />
        {/* {isModalOpen?<Modal close={closeModal}/>:null} */}
        {deleteModal[1]?(<ConfirmDeleteModal index={ deleteModal[0] } setEmployeeDetails = {setEmployeeDetails} employeeDetails={ tempArray } closeDeleteModal={closeModal}/>):null}
        <Modal />
        <div className='tableContainer'>
            {employeeDetails.length?(<EmployeeTable setDeleteModal={setDeleteModal} setEmployeeDetails = {setEmployeeDetails} employeeDetails={ tempArray } skills={employeeSkills}/>):(<h2>No employee data found</h2>)}
        </div>
   </main>
  )
}