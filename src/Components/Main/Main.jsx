import { useState, useEffect, useMemo } from 'react';
import deleteEmployee from '../../Utils/delete';
import updateEmployeeDetails from '../../Utils/update';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import Modal from '../Modal/Modal';
import SkillList from '../SkillList/SkillList';
import TableOperations from '../TableOperations/TableOperations';


export default function Main() {
    const [employeeDetails, setEmployeeDetails] = useState([])
    const [employeeSkills, setSkills] = useState([])
    const [actionType, setActionType] = useState('');
    const [empId, setEmpId] = useState('');
    const [dropDown, setDropDown] = useState(false)
    const [filterList, setFilterList] = useState('')
    const [selectedSkills, setSelectedSkills] = useState([])

    const toggleDropDown = (isFilter) => {
        setDropDown(!dropDown)
        setFilterList(isFilter)
        setSelectedSkills([])
    }
    const closeModal = () => {
        setActionType('')
        setEmpId('')
        setDropDown(false)
    }
    const openModal = (id,action) => {
        setEmpId(id)
        setActionType(action)
        setFilterList('')
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
    const tableEntries = ["empID", "empName", "department", "designation", "salary", "skills"]
    useEffect(getSkills, [])

    const selectedEmp = useMemo(() => {
        return employeeDetails.find(empObj=>empObj.empID===empId)
    }, [empId])

    const preFilterArray = useMemo(() => employeeDetails, [employeeSkills])

    const handleUpdate = (empData) => {
        console.log(empData);
        switch (actionType) {
            case 'add': {
                setEmployeeDetails(updateEmployeeDetails(tableEntries, employeeDetails.length, closeModal,empData,employeeDetails))
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
                setEmployeeDetails(updateEmployeeDetails(tableEntries,employeeDetails.indexOf(selectedEmp),closeModal,empData,employeeDetails))
                break
            }
            default: return null;
        }
    }

    const renderModals = () => {
        switch (actionType) {
            case 'add':
                return <Modal selectedSkills={ selectedSkills } employeeSkills={employeeSkills} actionType={actionType} close={closeModal} handleUpdate={handleUpdate} employee={{}} openList={toggleDropDown} renderSkillList={ renderSkillList }/>
            case 'delete':
            case 'edit':
                return <Modal selectedSkills={ selectedSkills } employeeSkills={employeeSkills} actionType={actionType} close={closeModal} handleUpdate={handleUpdate} employee={selectedEmp} openList={toggleDropDown} renderSkillList={ renderSkillList }/>
            case 'view':
                return <Modal selectedSkills={ selectedSkills } employeeSkills={employeeSkills} actionType={actionType} close={closeModal} handleUpdate={handleUpdate} setActionType={setActionType} employee={selectedEmp} />
            default:
                return null;
        }
    }

    const handleCheckBox = (e) => {
        e.target.checked?setSelectedSkills([...selectedSkills,Number(e.target.value)]):selectedSkills.splice(selectedSkills.indexOf(e.target.value),1);
    }

    const handleFilter = () => {
        console.log(selectedSkills,employeeDetails, preFilterArray);
        selectedSkills.length?setEmployeeDetails(employeeDetails.filter(empObj => empObj.skills.some(skillId => selectedSkills.includes(skillId)))):setEmployeeDetails(preFilterArray)
        setSelectedSkills([])
    }

    const renderSkillList = (isFilterList) => {
        return dropDown?<SkillList filter = { handleFilter } handleCheckBox={ handleCheckBox } employeeSkills={employeeSkills} isFilterList={isFilterList} />:null
    }
    let tempArray = [...employeeDetails]
    return (
        <main className='flexbox'>
            <TableOperations filterList={ filterList } openModal={openModal} openList={toggleDropDown} renderSkillList={renderSkillList}/>
            {renderModals()}
            <div className='tableContainer'>
                {employeeDetails.length ? (<EmployeeTable tableEntries={tableEntries} openModal={openModal} setEmployeeDetails={setEmployeeDetails} employeeDetails={tempArray} skills={employeeSkills} />) : (<h2>No employee data found</h2>)}
            </div>
        </main>
    )
}