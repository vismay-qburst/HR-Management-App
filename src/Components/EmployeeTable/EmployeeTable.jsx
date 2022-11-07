export default function EmployeeTable(props)
{
    return(
        <>
            {console.log(props.employeeDetails)}
            <table className="employeeTable">
                <thead>
                    {sortableColumns.map(column => <ColumnHeader columnName={column} isSortable/>)}
                    {unsortableColumns.map(column => <ColumnHeader columnName={column}/>)}
                </thead>
                <tbody className="tableBody">
                </tbody>
            </table>
        </>
    )
}

const sortableColumns=["Employee ID", "Employee Name", "Department", "Designation", "Salary"]
const unsortableColumns=["Skills", "Actions"]

const ColumnHeader = ({ columnName, isSortable }) => {
    return(
    isSortable? <th className="sortableColumn">{ columnName }</th> : <th>{ columnName }</th>
    )
}

