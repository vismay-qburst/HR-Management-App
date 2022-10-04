let flag = 0
let employeeDetails = []
let employeeSkills = []
let getData = () => {
    fetch("../data/employee.json")
        .then(res => res.json())
        .then(obj => {
            let tableContent = document.getElementById('tableBody')
            obj.forEach((item, index) => {
                employeeDetails[index] = item
                injectData(employeeDetails,tableContent, index)
            })
        })
}
let getSkills = () => {
    fetch("../data/skills.json")
    .then(res => res.json())
    .then(obj => {
        obj.forEach((item, index) => {
            employeeSkills[index] = item
        })
    })
}

getSkills()
getData()


function injectData(employeeDetails,tableContent,index)
{
    // console.log(employeeDetails);
    let skillArray=[]
    for(let id of employeeDetails[index].skills)
    {
        employeeSkills.forEach(skillobj => {
            if(id==skillobj.skillId)
              skillArray.push(skillobj.skill)
          })
    }
    let newRow = document.createElement('tr')
    newRow.innerHTML=`<td>${Number(employeeDetails[index].empID)}</td>
    <td>${employeeDetails[index].empName}</td>
    <td>${employeeDetails[index].department}</td>
    <td>${employeeDetails[index].designation}</td>
    <td>${Number(employeeDetails[index].salary)}</td>
    <td>${skillArray}</td>
    <td><div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="deleteEmployee(${index})"><i class="material-icons">delete</i></button>
    <button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${index})"><i class="material-icons">visibility</i>+</button></div></td>`
    tableContent.appendChild(newRow) 
    
    // console.log(employeeSkills);
}

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//     document.getElementById('addSkills').classList.toggle('show')
// }
  
// function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
// }


document.onload = setTimeout(function(){
for(let skillObj of employeeSkills)
{
    let newSkill=document.createElement('li')
    newSkill.innerHTML=`<span><input type="checkbox" id="${skillObj.skillId}"/></span><label for="${skillObj.skillId}">${skillObj.skill}</label>`
    skillList.appendChild(newSkill)
}  
},100)

function openDropDown() {
    let checkList = document.getElementById('list1');
    if (checkList.classList.contains('visible'))
        checkList.classList.remove('visible');
    else
        checkList.classList.add('visible');
    document.addEventListener("click",(event) => {
        if (event.target.tagName!=="INPUT" && checkList.classList.contains('visible'))
            checkList.classList.remove('visible');
    })
}

document.onclick = function(event){
    console.log(event.target);
}

