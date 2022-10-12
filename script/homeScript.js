let flag = 0
let employeeDetails = []
let employeeSkills = []
let table = document.getElementById('employeeTable')
let tableContent = document.getElementById('tableBody')

let skillList = Array.from(document.getElementsByClassName('skillList'))
let filterList = skillList[0]
let addSkillList = skillList[1]
let filterButton = document.getElementById('filterMenuButton')

let getData = () => {
    fetch("data/employee.json")
        .then(res => res.json())
        .then(obj => {
            obj.forEach((item, index) => {
                employeeDetails[index] = item
                injectData(employeeDetails, tableContent, index)
            })
        })
}
let getSkills = () => {
    fetch("data/skills.json")
        .then(res => res.json())
        .then(obj => {
            obj.forEach((item, index) => {
                employeeSkills[index] = item
            })
        })
    getData()
}

getSkills()


function injectData(employeeDetails, tableContent, index) {
    let skillArray = []
    for (let id of employeeDetails[index].skills) {
        employeeSkills.forEach(skillobj => {
            if (id == skillobj.skillId)
                skillArray.push(skillobj.skill)
        })
    }
    let newRow = document.createElement('tr')
    newRow.innerHTML = `<td>${Number(employeeDetails[index].empID)}</td>
    <td>${employeeDetails[index].empName}</td>
    <td>${employeeDetails[index].department}</td>
    <td>${employeeDetails[index].designation}</td>
    <td>${Number(employeeDetails[index].salary)}</td>
    <td>${skillArray}</td>
    <td><div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${index})"><i class="material-icons">visibility</i>+</button>
    <button class="buttonStyle actionButton" onclick="deleteEmployee(${index})"><i class="material-icons">delete</i></button></div></td>`
    tableContent.appendChild(newRow)

}

document.onload = setTimeout(function () {
    for (let skillObj of employeeSkills) {
        let newSkill = document.createElement('li')
        newSkill.innerHTML = `<span><input type="checkbox" id="filter${skillObj.skillId}"/></span><label for="filter${skillObj.skillId}">${skillObj.skill}</label>`
        filterList.insertBefore(newSkill, filterButton)
    }
}, 100)
document.onload = setTimeout(function () {
    for (let skillObj of employeeSkills) {
        let newSkill = document.createElement('li')
        newSkill.innerHTML = `<span><input type="checkbox" id="add${skillObj.skillId}"/></span><label for="add${skillObj.skillId}">${skillObj.skill}</label>`
        addSkillList.appendChild(newSkill)
    }
}, 101)

let checkList

function openDropDown(n) {
    checkList = document.getElementById(`list${n}`)
    if (checkList.classList.contains('visible') && event.target.classList.contains('dropdown')) {
        checkList.classList.remove('visible')
        return
    }
    checkList.classList.add('visible')
}

document.addEventListener("click", (event) => {
    if ((event.target.tagName !== 'LI' && event.target.parentNode.tagName !== 'LI' && event.target.parentNode.parentNode.tagName !== 'LI') && !(event.target.classList.contains("dropdownSelect")) && !(event.target.classList.contains("dropdown")) && checkList.classList.contains('visible')) {
        checkList.classList.remove('visible');
    }
})
