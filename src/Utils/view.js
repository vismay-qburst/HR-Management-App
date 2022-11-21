export default function viewEmployeeDetails(employeeDetails) {
    let viewOverlay = document.getElementsByClassName('viewEmployeeOverlay')[0]
    let viewModal = document.getElementsByClassName('viewEmployeeModal')[0]
    let closeButton = document.getElementsByClassName("close")[0];
    let heading = viewModal.getElementsByClassName('heading')[0]
    let okButton = document.getElementsByClassName('okButton')[0]
    let editButton = document.getElementsByClassName('editButton')[0]


    heading.innerHTML = `Employee#${employeeDetails.empID} - ${employeeDetails.empName}`
    viewOverlay.className = 'viewEmployeeOverlay modalOverlay showModal';
    // let skillArray = []
    // for (let id of employeeDetails[n].skills) {
    //     employeeSkills.forEach(skillobj => {
    //         if (id == skillobj.skillId)
    //             skillArray.push(skillobj.skill)
    //     })
    // }

    let edited = false

    let details = document.getElementsByClassName('details')[0]
    details.innerHTML = `<label class="modalLabel" for="empID">Employee ID: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="empID" value="${employeeDetails.empID}">
    <label class="modalLabel" for="empName">Employee Name: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="empName" value="${employeeDetails.empName}">
    <label class="modalLabel" for="age">Age: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="age" value="${employeeDetails.age}">
    <label class="modalLabel" for="contactNumber">Contact number: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="contactNumber" value="${employeeDetails.contactNumber}">
    <label class="modalLabel" for="emailID">E-mail ID: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="emailID" value="${employeeDetails.emailID}"> 
    <label class="modalLabel" for="department">Department: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="department" value="${employeeDetails.department}">
    <label class="modalLabel" for="designation">Designation: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="designation" value="${employeeDetails.designation}">
    <label class="modalLabel" for="experience">Experience(in years): </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="experience" value="${employeeDetails.experience}">
    <label class="modalLabel" for="salary">Salary: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="salary" value="${employeeDetails.salary}">`
    // <label class="modalLabel" for="skills">Skills: </label>
    // <input readOnly = "true" type="text" class="readOnlyField" id="skills" value="${skillArray}">`


    // let editDetails = document.createElement('div')
    // editDetails.className = 'formContainer'
    // editDetails.innerHTML = `<label class="modalLabel requiredField" for="empID1">Employee ID: </label>
    // <input type="text" id="empID1" value="${employeeDetails[n].empID}">
    // <label class="modalLabel requiredField" for="empName1">Employee Name: </label>
    // <input type="text" id="empName1" value="${employeeDetails[n].empName}">
    // <label class="modalLabel" for="age1">Age: </label>
    // <input type="text" id="age1" value="${employeeDetails[n].age}">
    // <label class="modalLabel" for="contactNumber1">Contact number: </label>
    // <input type="text" id="contactNumber1" value="${employeeDetails[n].contactNumber}">
    // <label class="modalLabel" for="emailID1">E-mail ID: </label>
    // <input type="text" id="emailID1" value="${employeeDetails[n].emailID}"> 
    // <label class="modalLabel requiredField" for="department1">Department: </label>
    // <input type="text" id="department1" value="${employeeDetails[n].department}">
    // <label class="modalLabel requiredField" for="designation1">Designation: </label>
    // <input type="text" id="designation1" value="${employeeDetails[n].designation}">
    // <label class="modalLabel" for="experience1">Experience(in years): </label>
    // <input type="text" id="experience1" value="${employeeDetails[n].experience}">
    // <label class="modalLabel requiredField" for="salary1">Salary: </label>
    // <input type="text" id="salary1" value="${employeeDetails[n].salary}">
    // <label class="modalLabel requiredField" for="skills">Skills: </label>
    // <div class="dropdown" id="list1" onclick="openDropDown(1)">
    //     <input id="dropdownSelect1" class = "dropdownSelect" placeholder="Select skills" readonly="true">
    //     <div id="viewSkills" class="dropdown-content">
    //         <ul class="skillList items">
    //         </ul>
    //     </div>
    // </div>`

    // editButton.onclick = function () {
    //     viewModal.replaceChild(editDetails, details)
    //     edited = true
    //     skillList = Array.from(document.getElementsByClassName('skillList'))
    //     for (let skillObj of employeeSkills) {
    //         let newSkill = document.createElement('li')
    //         newSkill.innerHTML = `<span><input type="checkbox" id="edit${skillObj.skillId}"/></span><label for="edit${skillObj.skillId}">${skillObj.skill}</label>`
    //         skillList.forEach(x => x.appendChild(newSkill))
    //     }
    //     okButton.classList.add('soloModalButton')
    //     document.getElementsByClassName('viewModalButtons').removeChild(editButton)
    // }

    okButton.onclick = function () {
        // let rowArray = table.rows
        // let mandatoryFields = ["empID", "empName", "department", "designation", "salary"]
        // let emptyFlag = 0
        // for (let key of mandatoryFields) {
        //     if (!document.getElementsByClassName(`${key}1`).value)
        //         emptyFlag = 1
        // }
        // let editedSkillIDs = Array.from(skillList[2].getElementsByTagName('INPUT')).filter(ch => ch.checked).map(inputElement => inputElement.id)
        // if (editedSkillIDs.length == 0)
        //     emptyFlag = 1
        // if (emptyFlag == 1)
        //     alert("You have left a mandatory field empty")
        // else {
        //     if (edited) {
        //         for (let key in employeeDetails[n]) {
        //             if (key == "skills") {
        //                 continue
        //             }
        //             employeeDetails[n][key] = document.getElementsByClassName(`${key}1`).value
        //         }
        //         employeeDetails[n]["skills"] = []
        //         let editedSkillArray = []
        //         for (let id of editedSkillIDs) {
        //             employeeSkills.forEach(skillobj => {
        //                 if (id == `edit${skillobj.skillId}`) {
        //                     employeeDetails[n]["skills"].push(skillobj.skillId)
        //                     editedSkillArray.push(skillobj.skill)
        //                 }
        //             })
        //         }
        //         skillArray = editedSkillArray
        //         viewModal.replaceChild(details, editDetails)
        //         okButton.classList.remove('soloModalButton')
        //         document.getElementsByClassName('viewModalButtons').insertBefore(editButton, okButton)
        //         rowArray[n + 1].getElementsByTagName('TD')[0].innerHTML = Number(employeeDetails[n]['empID'])
        //         rowArray[n + 1].getElementsByTagName('TD')[1].innerHTML = employeeDetails[n]['empName']
        //         rowArray[n + 1].getElementsByTagName('TD')[2].innerHTML = employeeDetails[n]['department']
        //         rowArray[n + 1].getElementsByTagName('TD')[3].innerHTML = employeeDetails[n]['designation']
        //         rowArray[n + 1].getElementsByTagName('TD')[4].innerHTML = Number(employeeDetails[n]['salary'])
        //         rowArray[n + 1].getElementsByTagName('TD')[5].innerHTML = editedSkillArray
        //     }
            viewOverlay.className = 'viewEmployeeOverlay modalOverlay';
        // }
    }
    closeButton.onclick = function () {
        viewOverlay.className = 'viewEmployeeOverlay modalOverlay';
        // if (edited) {
        //     viewModal.replaceChild(details, editDetails)
        //     okButton.classList.remove('soloModalButton')
        //     document.getElementsByClassName('viewModalButtons').insertBefore(editButton, okButton)
        // }
    }
    // window.onclick = function (event) {
    //     if (event.target == viewOverlay) {
    //         viewOverlay.className = 'modal';
    //         if (edited)
    //             viewModal.replaceChild(details, editDetails)
    //         okButton.classList.remove('soloModalButton')
    //         document.getElementsByClassName('viewModalButtons').insertBefore(editButton, okButton)
    //     }
    // }
}