const sortableColumns=["Employee ID", "Employee Name", "Department", "Designation", "Salary"]
const unsortableColumns=["Skills", "Actions"]
const tableEntries=["empID","empName"]

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

export default function EmployeeTable({ employeeDetails,employeeSkills })
{
    return(
        <>
            {console.log(2000,employeeDetails)}
            <table className="employeeTable">
                <thead>
                    {sortableColumns.map(column => <ColumnHeader columnName={column} isSortable/>)}
                    {unsortableColumns.map(column => <ColumnHeader columnName={column}/>)}
                </thead>
                <tbody className="tableBody">
                {/* employeeDetails.map(emp => <tr>{tableEntries.map(entry => <DataEntry emp={emp} entry ={entry}/>)}</tr>)
                <tr>{tableEntries.map(entry => <DataEntry emp={employeeDetails[0]} entry ={entry}/>)}</tr> */}
                </tbody>
            </table>
        </>
    )
}
