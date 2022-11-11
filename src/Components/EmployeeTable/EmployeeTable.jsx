const sortableColumns=["Employee ID", "Employee Name", "Department", "Designation", "Salary"]
const unsortableColumns=["Skills", "Actions"]
const tableEntries=["empID","empName","department","designation","salary"]

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

export default function EmployeeTable({ employeeDetails,skills })
{
    const sortTable = (columnIndex) => {
        console.log(columnIndex);
        let rows, switching, i, shouldSwitch, flag = 0;
        let table = document.querySelector(".employeeTable");
        switching = true;
        let direction = "ascending";
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 0; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                let dataElement = rows[i].getElementsByTagName("TD")[columnIndex];
                let adjacentDataElement = rows[i + 1].getElementsByTagName("TD")[columnIndex];
                if (direction == "ascending") {
                    if ((columnIndex !== 4 && dataElement.innerHTML.toLowerCase() > adjacentDataElement.innerHTML.toLowerCase()) || (columnIndex == 4 && Number(dataElement.innerHTML) > Number(adjacentDataElement.innerHTML))) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (direction == "descending") {
                    if ((columnIndex !== 4 && dataElement.innerHTML.toLowerCase() < adjacentDataElement.innerHTML.toLowerCase()) || (columnIndex == 4 && Number(dataElement.innerHTML) < Number(adjacentDataElement.innerHTML))) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                [employeeDetails[i+1], employeeDetails[i]] = [employeeDetails[i], employeeDetails[i+1]]
                rows[i].getElementsByTagName("TD")[6].innerHTML = `<div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${i - 1})"><i class="material-icons">visibility</i>+</button><button class="buttonStyle actionButton" onclick="deleteEmployee(${i - 1})"><i class="material-icons">delete</i></button> </div>`
                rows[i + 1].getElementsByTagName("TD")[6].innerHTML = `<div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${i})"><i class="material-icons">visibility</i>+</button><button class="buttonStyle actionButton" onclick="deleteEmployee(${i})"><i class="material-icons">delete</i></button> </div>`
                switching = true;
                flag = 1;
            }
            else {
                if (flag == 0 && direction == "ascending") {
                    direction = "descending";
                    switching = true;
                }
            }
        }
    }
    const viewEmployeeDetails = (n) => {
        console.log(employeeDetails[n]);
    }
    return(
        <>
            <table className="employeeTable">
                <thead>
                    {sortableColumns.map((column,index) => <ColumnHeader columnName={column} isSortable sort={()=>sortTable(index)}/>)}
                    {unsortableColumns.map(column => <ColumnHeader columnName={column}/>)}
                </thead>
                <tbody className="tableBody">
                {
                        employeeDetails.map
                        ((emp,index) => 
                            <tr>
                                {tableEntries.map(entry => <DataEntry emp={emp} entry={entry} />)}
                                <Skills skillIndices={emp.skills} employeeSkills={skills}/>
                                <td><div class="flexbox tableButtons"><button class="buttonStyle actionButton" onClick={()=>viewEmployeeDetails(index)}><i class="material-icons">visibility</i>+</button><button class="buttonStyle actionButton" onclick="deleteEmployee(${index})"><i class="material-icons">delete</i></button></div></td>
                            </tr>
                        )
                }
                </tbody>
            </table>
        </>
    )
}
