import deleteEmployee from "../../Utils/delete"
import sortTable from "../../Utils/sort"
import viewEmployeeDetails from "../../Utils/view"


const sortableColumns=["Employee ID", "Employee Name", "Department", "Designation", "Salary"]
const unsortableColumns=["Skills", "Actions"]
const tableEntries=["empID","empName","department","designation","salary"]

let arrayOfObj=[]
sortableColumns.forEach((header,index)=>{
    let obj={}
    obj["tableHeader"]=header
    obj["dataHeader"]=tableEntries[index]
    arrayOfObj.push(obj)
})
console.log("Objects:",arrayOfObj)
const ColumnHeader = ({ columnName, isSortable, sort }) => {
    return(
    isSortable? <th className="sortableColumn" onClick={ sort }>{ columnName }</th> : <th>{ columnName }</th>
    )
}

const DataEntry = ({ emp, entry }) => {
    return(
        <td>{ emp[entry] }</td>
    )
}

const Skills = ({ skillIndices, employeeSkills }) => {
    let skillArray=[]
    employeeSkills.forEach(skillObj => {
        if (skillIndices.includes(skillObj.skillId))
            skillArray.push(skillObj.skill)
    })
    console.log('Array:',skillArray);
    return(
        <td>{skillArray.join(', ')}</td>
    )
}

export default function EmployeeTable({ setDeleteModal,setEmployeeDetails,employeeDetails,skills })
{
    console.log("Rendering table",);
    return(
        <>
            <table className="employeeTable">
                <thead>
                    {sortableColumns.map((column,index) => <ColumnHeader columnName={column} isSortable sort={() => setEmployeeDetails(sortTable(tableEntries, employeeDetails, index))}/>)}
                    {unsortableColumns.map(column => <ColumnHeader columnName={column}/>)}
                </thead>
                <tbody className="tableBody">
                {
                        employeeDetails.map
                        ((emp,index) => 
                            <tr>
                                {tableEntries.map(entry => <DataEntry emp={emp} entry={entry} />)}
                                <Skills skillIndices={emp.skills} employeeSkills={skills}/>
                                <td><div className="flexbox tableButtons"><button className="buttonStyle actionButton" onClick={()=>viewEmployeeDetails(emp)}><i className="material-icons">visibility</i>+</button><button className="buttonStyle actionButton" onClick={()=>{setDeleteModal([index,true])}}><i className="material-icons">delete</i></button></div></td>
                            </tr>
                        )
                }
                </tbody>
            </table>
        </>
    )
}
