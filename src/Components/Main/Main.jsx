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
    const [actionType, setActionType] = useState('');
    const [empId, setEmpId] = useState('');
    const closeModal = () => {
        setActionType('')
        setEmpId('')
    }
    const openModal = (id,action) => {
        setEmpId(id)
        setActionType(action)
    }
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
    useEffect(getSkills, [])

    const selectedEmp = useMemo(() => {
        return employeeDetails.find(empObj=>empObj.empID===empId)
    }, [empId])

    const handleUpdate = (empData) => {
        switch (actionType) {
            case 'add': {
                setEmployeeDetails(addEmployee(tableEntries, employeeDetails, empData, closeModal))
                break
            }
            case 'delete': {
                setEmployeeDetails(deleteEmployee(employeeDetails.indexOf(selectedEmp),employeeDetails))
                closeModal()
                break
            }
            case 'view': {
                closeModal()
                break
            }
            case 'edit': {
                setEmployeeDetails(editEmployeeDetails(tableEntries,employeeDetails.indexOf(selectedEmp),closeModal,empData,employeeDetails))
            }
            default: return null;
        }
    }

    const renderModals = () => {
        switch (actionType) {
            case 'add':
                return <Modal actionType={actionType} close={closeModal} handleUpdate={handleUpdate} employee={{}} />
            case 'delete':
            case 'edit':
                return <Modal actionType={actionType} close={closeModal} handleUpdate={handleUpdate} employee={selectedEmp} />
            case 'view':
                return <Modal actionType={actionType} close={closeModal} handleUpdate={handleUpdate} setActionType={setActionType} employee={selectedEmp} />
            default:
                return null;
        }
    }
    let tempArray = [...employeeDetails]
    return (
        <main className='flexbox'>
            <TableOperations setActionType={setActionType} />
            {renderModals()}
            <div className='tableContainer'>
                {employeeDetails.length ? (<EmployeeTable tableEntries={tableEntries} openModal={openModal} setEmployeeDetails={setEmployeeDetails} employeeDetails={tempArray} skills={employeeSkills} />) : (<h2>No employee data found</h2>)}
            </div>
        </main>
    )
}