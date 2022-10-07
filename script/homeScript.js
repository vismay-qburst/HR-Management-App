let flag = 0
let employeeDetails = []
let employeeSkills = []

let tableContent = document.getElementById('tableBody')

let skillList = Array.from(document.getElementsByClassName('skillList'))
let filterList = skillList[0]
let addSkillList = skillList[1]
let filterButton = document.getElementById('filterMenuButton')
console.log(addSkillList);

let getData = () => {
    fetch("../data/employee.json")
        .then(res => res.json())
        .then(obj => {
            
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
    <td><div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${index})"><i class="material-icons">visibility</i>+</button>
    <button class="buttonStyle actionButton" onclick="deleteEmployee(${index})"><i class="material-icons">delete</i></button></div></td>`
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
    newSkill.innerHTML=`<span><input type="checkbox" id="filter${skillObj.skillId}"/></span><label for="filter${skillObj.skillId}">${skillObj.skill}</label>`
    // skillList.forEach(x=>x.appendChild(newSkill))
    filterList.insertBefore(newSkill,filterButton)
}  
},100)
document.onload = setTimeout(function(){
    for(let skillObj of employeeSkills)
    {
        let newSkill=document.createElement('li')
        newSkill.innerHTML=`<span><input type="checkbox" id="add${skillObj.skillId}"/></span><label for="add${skillObj.skillId}">${skillObj.skill}</label>`
        // skillList.forEach(x=>x.appendChild(newSkill))
        addSkillList.appendChild(newSkill)
    }  
    },101)

let checkList

function openDropDown(n) {
    checkList = document.getElementById(`list${n}`)
    // document.getElementById(`dropdownSelect${n}`).placeholder=""
    if(checkList.classList.contains('visible') && event.target.classList.contains('dropdown'))
    {
        checkList.classList.remove('visible')
        return
    }
    checkList.classList.add('visible')
}

document.addEventListener("click",(event) => {
    // console.log(checkList);
    if ((event.target.tagName!=='LI' && event.target.parentNode.tagName!=='LI' && event.target.parentNode.parentNode.tagName!=='LI') && !(event.target.classList.contains("dropdownSelect")) && !(event.target.classList.contains("dropdown")) && checkList.classList.contains('visible'))
        {
            // console.log(event.target);
            checkList.classList.remove('visible');
        }
})

// document.onclick = function(event){
//     console.log(event.target);
// }
