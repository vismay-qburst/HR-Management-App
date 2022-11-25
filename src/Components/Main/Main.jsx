import { useState, useEffect, useMemo } from 'react';
import addEmployee from '../../Utils/add';
import deleteEmployee from '../../Utils/delete';
import editEmployeeDetails from '../../Utils/edit';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import Modal from '../Modal/Modal';
import TableOperations from '../TableOperations/TableOperations';


export default function Main() {
    const [employeeDetails, setEmployeeDetails] = useState([])
    const [employeeSkills, setSkills] = useState([])
    const [loader, setLoader] = useState(true);
    const [actionType, setActionType] = useState('');
    const [empId, setEmpId] = useState('');
    const [deleteModal, setDeleteModal] = useState([0, false])
    const closeModal = () => {
        setActionType('')
        setEmpId('')
    }
    const openModal = (id,action) => {
        console.log(id,action);
        setEmpId(id)
        setActionType(action)
    }
    // setLoader(false)
    let getData = () => {
        fetch("data/employee.json")
            .then(res => res.json())
            .then(empData => { setEmployeeDetails(empData) })
    }
    let getSkills = () => {
        fetch("data/skills.json")
            .then(res => res.json())
            .then(skillData => { setSkills(skillData) })
        getData()
    }
    const tableEntries = ["empID", "empName", "department", "designation", "salary"]
    console.log(deleteModal);
    const [isModalOpen, setIsModalOpen] = useState([0, false])
    useEffect(getSkills, [])

    const selectedEmp = useMemo(() => {
        console.log("EMPID changed");
        return employeeDetails.find(empObj=>empObj.empID==empId)
    }, [empId])

    const handleUpdate = (empData) => {
        switch (actionType) {
            case 'add': {
                setEmployeeDetails(addEmployee(tableEntries, employeeDetails, empData, closeModal))
                break
            }
            case 'delete': {
                setEmployeeDetails(deleteEmployee(closeModal,employeeDetails.indexOf(selectedEmp),employeeDetails))
                break
            }
            case 'view': {
                console.log("testing");
                closeModal()
                break
            }
            case 'edit': {
                setEmployeeDetails(editEmployeeDetails(tableEntries,employeeDetails.indexOf(selectedEmp),closeModal,empData,employeeDetails))
            }
        }
    }

    const renderModals = () => {
        switch (actionType) {
            case 'add':
                return <Modal tableEntries={tableEntries} actionType={actionType} close={closeModal} handleUpdate={handleUpdate} employeeDetails={tempArray} employee={{}} />
            case 'delete':
                return <Modal tableEntries={tableEntries} actionType={actionType} close={closeModal} handleUpdate={handleUpdate} employeeDetails={tempArray} employee={selectedEmp} />
            case 'view':
                return <Modal tableEntries={tableEntries} setActionType={setActionType} close={closeModal} setEmployeeDetails={setEmployeeDetails} employeeDetails={tempArray} employee={selectedEmp} />   
            case 'edit':
                return <Modal tableEntries={tableEntries} actionType={actionType} close={closeModal} handleUpdate={handleUpdate} employeeDetails={tempArray} employee={selectedEmp} />
            default:
                return null;
        }
    }
    console.log("Rendering main", isModalOpen);
    let tempArray = [...employeeDetails]
    return (
        <main className='flexbox'>
            <TableOperations setActionType={setActionType} />
            {renderModals()}
            <div className='tableContainer'>
                {employeeDetails.length ? (<EmployeeTable tableEntries={tableEntries} openModal={openModal} setIsModalOpen={setIsModalOpen} setDeleteModal={setDeleteModal} setEmployeeDetails={setEmployeeDetails} employeeDetails={tempArray} skills={employeeSkills} />) : (<h2>No employee data found</h2>)}
            </div>
        </main>
    )
}