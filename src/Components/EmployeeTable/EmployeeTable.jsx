const sortableColumns=["Employee ID", "Employee Name", "Department", "Designation", "Salary"]
const unsortableColumns=["Skills", "Actions"]
const tableEntries=["empID","empName","department","designation","salary"]

const ColumnHeader = ({ columnName, isSortable }) => {
    return(
    isSortable? <th className="sortableColumn">{ columnName }</th> : <th>{ columnName }</th>
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

export default function EmployeeTable({ employeeDetails,skills })
{
    return(
        <>
            {/* {console.log(28,skills)} */}
            <table className="employeeTable">
                <thead>
                    {sortableColumns.map(column => <ColumnHeader columnName={column} isSortable/>)}
                    {unsortableColumns.map(column => <ColumnHeader columnName={column}/>)}
                </thead>
                <tbody className="tableBody">
                {
                        employeeDetails.map
                        (emp => 
                            <tr>
                                {tableEntries.map(entry => <DataEntry emp={emp} entry={entry} />)}
                                <Skills skillIndices={emp.skills} employeeSkills={skills}/>
                                <td><div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${index})"><i class="material-icons">visibility</i>+</button><button class="buttonStyle actionButton" onclick="deleteEmployee(${index})"><i class="material-icons">delete</i></button></div></td>
                            </tr>
                        )
                }
                </tbody>
            </table>
        </>
    )
}
