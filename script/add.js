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
  let newSkillIDs=Array.from(skillList[1].getElementsByTagName('INPUT')).filter(ch => ch.checked).map(inputElement => inputElement.id)
  console.log(newSkillIDs);
  flag = 1
  newObj = {}
  for (let key in employeeDetails[0]) {
    if (key == "skills")
    {  
      // newObj["skills"] = newSkillIDs
      continue
    }
    newObj[`${key}`] = document.getElementById(`${key}`).value
  }
  let newSkillArray=[]
  let lastIndex = employeeDetails.length
  employeeDetails[lastIndex] = newObj
  employeeDetails[lastIndex]["skills"]=[]
  for(let id of newSkillIDs)
  {
    employeeSkills.forEach(skillobj => {
      if(id==`add${skillobj.skillId}`)
      {  
        employeeDetails[lastIndex]["skills"].push(skillobj.skillId)
        newSkillArray.push(skillobj.skill)
      }
    })
  }
  console.log(newSkillArray);
  console.log(employeeDetails);
  let table = document.getElementById('employeeTable')
  let newRow = table.insertRow()
  newRow.insertCell().innerHTML = Number(employeeDetails[lastIndex]['empID'])
  newRow.insertCell().innerHTML = employeeDetails[lastIndex]['empName']
  newRow.insertCell().innerHTML = employeeDetails[lastIndex]['department']
  newRow.insertCell().innerHTML = employeeDetails[lastIndex]['designation']
  newRow.insertCell().innerHTML = Number(employeeDetails[lastIndex]['salary'])
  newRow.insertCell().innerHTML = newSkillArray
  newRow.insertCell().innerHTML = `<div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${lastIndex})"><i class="material-icons">visibility</i>+</button>
  <button class="buttonStyle actionButton" onclick="deleteEmployee(${lastIndex})"><i class="material-icons">delete</i></button></td></div>`
  addOverlay.className = 'modal';
}
