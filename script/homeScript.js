let flag = 0
let employeeDetails = []
let getData = () => {
    fetch("data/employee.json")
        .then(res => res.json())
        .then(obj => {
            let tableContent = document.getElementById('tableBody')
            obj.forEach((item, index) => {
                employeeDetails[index] = item
                injectData(tableContent, item, index)
            })
        })
}

getData()


function injectData(tableContent,item,index)
{
    let newRow = document.createElement('tr')
    newRow.innerHTML=`<td>${Number(item.empID)}</td>
    <td>${item.empName}</td>
    <td>${item.department}</td>
    <td>${item.designation}</td>
    <td>${Number(item.salary)}</td>
    <td>${item.skills}</td>
    <td><button class="buttonStyle actionButton" onclick="deleteEmployee(${index})"><i class="material-icons">delete</i>${index}</button>
    <button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${index})"><i class="material-icons">visibility</i>${index}</button></td>`
    tableContent.appendChild(newRow)
}
