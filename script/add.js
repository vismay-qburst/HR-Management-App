let addOverlay = document.getElementById("addEmployeeOverlay");
let addEmployeeButton = document.getElementById("addEmployeeButton");
let closeButton = document.getElementsByClassName("close")[0];
addEmployeeButton.onclick = function() {
  addOverlay.className='modal showModal';
}
closeButton.onclick = function() {
  addOverlay.className='modal';
}
window.onclick = function(event) {
  if (event.target == addOverlay) {
    addOverlay.className='modal';
  }
} 

function addEmployee()
{
    flag=1
    newObj={}
    for(let key in employeeDetails[0])
    {
        if(key=="skills")
            break
        newObj[`${key}`]=document.getElementById(`${key}`).value
    }
    let lastIndex=employeeDetails.length
    employeeDetails[lastIndex]=newObj
    console.log(employeeDetails);
    let table=document.getElementById('employeeTable')
    let newRow=table.insertRow()
    newRow.insertCell().innerHTML=Number(employeeDetails[lastIndex]['empID'])
    newRow.insertCell().innerHTML=employeeDetails[lastIndex]['empName']
    newRow.insertCell().innerHTML=employeeDetails[lastIndex]['department']
    newRow.insertCell().innerHTML=employeeDetails[lastIndex]['designation']
    newRow.insertCell().innerHTML=Number(employeeDetails[lastIndex]['salary'])
    newRow.insertCell()
    newRow.insertCell().innerHTML=`<button class="buttonStyle actionButton" onclick="deleteEmployee(${lastIndex})"><i class="material-icons">delete</i>${lastIndex}</button>
    <button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${lastIndex})"><i class="material-icons">visibility</i>${lastIndex}</button></td>`
    addOverlay.className='modal';
}
