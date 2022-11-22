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
    const [addModal,setAddModal] = useState(false)
    const [deleteModal,setDeleteModal]=useState([0,false])
    const closeModal = () => {
        setDeleteModal(!deleteModal)
        setIsModalOpen([0,false])
        setAddModal(false)
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
    const tableEntries = ["empID", "empName", "department", "designation", "salary"]
    console.log(deleteModal);
    const [isModalOpen, setIsModalOpen] = useState([0,false])
  useEffect(getSkills,[])
  console.log("Rendering main",isModalOpen);
  let tempArray = [...employeeDetails]
  return(
    <main className='flexbox'>
        <TableOperations add={ setAddModal }/>
        {isModalOpen[1]?<Modal tableEntries={ tableEntries } close={closeModal} index={isModalOpen[0]} setEmployeeDetails = { setEmployeeDetails } employeeDetails={ tempArray } employee={employeeDetails[isModalOpen[0]]}/>:null}
        {addModal?<Modal tableEntries={ tableEntries } isAdd={addModal} close={closeModal} setEmployeeDetails = { setEmployeeDetails } employeeDetails={ tempArray } employee={{}}/>:null}
        {deleteModal[1]?(<ConfirmDeleteModal index={ deleteModal[0] } setEmployeeDetails = {setEmployeeDetails} employeeDetails={ tempArray } closeDeleteModal={closeModal}/>):null}
        {/* <Modal /> */}
        <div className='tableContainer'>
            {employeeDetails.length?(<EmployeeTable tableEntries={ tableEntries } setIsModalOpen={setIsModalOpen} setDeleteModal={setDeleteModal} setEmployeeDetails = {setEmployeeDetails} employeeDetails={ tempArray } skills={employeeSkills}/>):(<h2>No employee data found</h2>)}
        </div>
   </main>
  )
}