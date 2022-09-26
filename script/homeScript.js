let getData = () => {   
    fetch("../data/employee.json")
    .then(res => res.json())
    .then(obj => {
        let tableContent = document.getElementById('tableBody')
        obj.forEach((item,index) => {
            injectData(tableContent,item,index)
        })
    })
}

getData()

function injectData(tableContent,item,index)
{
    console.log(item);
    let newRow = document.createElement('tr')
    newRow.innerHTML=`<td>${Number(item.empID)}</td>
    <td>${item.empName}</td>
    <td>${item.department}</td>
    <td>${item.designation}</td>
    <td>${Number(item.salary)}</td>
    <td>${item.skills}</td>`
    tableContent.appendChild(newRow)
}