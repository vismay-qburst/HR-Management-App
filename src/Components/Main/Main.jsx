import { useState, useEffect, useMemo } from 'react';
import { Link, Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
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
    const [selectedSkills, setSelectedSkills] = useState([]);
    const params = useParams();
    const location = useLocation();
    const nav = useNavigate()

    const toggleDropDown = (isFilter) => {
        setDropDown(!dropDown)
        setFilterList(isFilter)
        isFilter?setSelectedSkills(selectedSkills):setSelectedSkills([])
    }
    const closeModal = () => {
        setActionType('')
        setEmpId('')
        setDropDown(false)
        setSelectedSkills([])
        nav("/table")
    }
    const openModal = (id,action) => {
        console.log(id,action);
        setEmpId(id)
        setActionType(action)
        setFilterList('')
    }
    let modalRoute = (empList) => {
        const id = params.empid
        const path = location.pathname
        if(id && empList.length)
        {
            if(path.includes("view"))
                openModal(id,"view")
            else if(path.includes("delete"))
                openModal(id,"delete")
            else if(path.includes("edit"))
                openModal(id,'edit')
        }
        else if(path.includes('add'))
            openModal('','add')
    }
    let getData = () => {
        fetch("/data/employee.json")
            .then(res => res.json())
            .then(empData => {
                setEmployeeDetails(empData)
                modalRoute(empData)
            })
    }
    let getSkills = () => {
        fetch("/data/skills.json")
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
    console.log(params, location)

    useEffect(()=>{
        modalRoute(employeeDetails)
    },[params,location])

    console.log(actionType);

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
        // selectedSkills.includes(Number(e.target.value))?console.log(e.target.checked):console.log("Not already selected");
        e.target.checked?setSelectedSkills([...selectedSkills,Number(e.target.value)]):selectedSkills.splice(selectedSkills.indexOf(e.target.value),1);
    }

    const handleFilter = () => {
        let filterArray = [...employeeDetails,...preFilterArray].filter((item,index,ar)=>ar.indexOf(item)===index)
        console.log(selectedSkills,employeeDetails, preFilterArray ,filterArray);
        selectedSkills.length?setEmployeeDetails(filterArray.filter(empObj => selectedSkills.every(skillId => empObj.skills.includes(skillId)))):setEmployeeDetails(preFilterArray)
        // setSelectedSkills([])
    }

    const renderSkillList = (isFilterList) => {
        return dropDown?<SkillList selectedSkills={ selectedSkills } filter = { handleFilter } handleCheckBox={ handleCheckBox } employeeSkills={employeeSkills} isFilterList={isFilterList} />:null
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