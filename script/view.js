function viewEmployeeDetails(n)
{
    let viewOverlay=document.getElementById('viewEmployeeOverlay')
    let viewModal=document.getElementById('viewEmployeeModal')
    let closeButton = document.getElementsByClassName("close")[2];
    let heading=viewModal.getElementsByTagName('H2')[0]
    let okButton = document.getElementById('okButton')
    let editButton = document.getElementById('editButton')
    let table=document.getElementById('employeeTable')

    // console.log(employeeDetails);
    heading.innerHTML=`Employee#${employeeDetails[n].empID} - ${employeeDetails[n].empName}`
    viewOverlay.className = 'modal showModal';
    console.log(employeeDetails[n]);

    let skillArray=[]
    for(let id of employeeDetails[n].skills)
    {
        employeeSkills.forEach(skillobj => {
            if(id==skillobj.skillId)
              skillArray.push(skillobj.skill)
          })
    }
    
    edited=false

    let details=document.getElementById('details')
    details.innerHTML=`<label class="modalLabel" for="empID">Employee ID: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="empID" value="${employeeDetails[n].empID}">
    <label class="modalLabel" for="empName">Employee Name: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="empName" value="${employeeDetails[n].empName}">
    <label class="modalLabel" for="age">Age: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="age" value="${employeeDetails[n].age}">
    <label class="modalLabel" for="contactNumber">Contact number: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="contactNumber" value="${employeeDetails[n].contactNumber}">
    <label class="modalLabel" for="emailID">E-mail ID: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="emailID" value="${employeeDetails[n].emailID}"> 
    <label class="modalLabel" for="department">Department: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="department" value="${employeeDetails[n].department}">
    <label class="modalLabel" for="designation">Designation: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="designation" value="${employeeDetails[n].designation}">
    <label class="modalLabel" for="experience">Experience(in years): </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="experience" value="${employeeDetails[n].experience}">
    <label class="modalLabel" for="salary">Salary: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="salary" value="${employeeDetails[n].salary}">
    <label class="modalLabel" for="skills">Skills: </label>
    <input readOnly = "true" type="text" class="readOnlyField" id="skills" value="${skillArray}">`


    let editDetails = document.createElement('div')
    editDetails.className='formContainer'
    editDetails.innerHTML=`<label class="modalLabel" for="empID1">Employee ID: </label>
    <input type="text" id="empID1" value="${employeeDetails[n].empID}">
    <label class="modalLabel" for="empName1">Employee Name: </label>
    <input type="text" id="empName1" value="${employeeDetails[n].empName}">
    <label class="modalLabel" for="age1">Age: </label>
    <input type="text" id="age1" value="${employeeDetails[n].age}">
    <label class="modalLabel" for="contactNumber1">Contact number: </label>
    <input type="text" id="contactNumber1" value="${employeeDetails[n].contactNumber}">
    <label class="modalLabel" for="emailID1">E-mail ID: </label>
    <input type="text" id="emailID1" value="${employeeDetails[n].emailID}"> 
    <label class="modalLabel" for="department1">Department: </label>
    <input type="text" id="department1" value="${employeeDetails[n].department}">
    <label class="modalLabel" for="designation1">Designation: </label>
    <input type="text" id="designation1" value="${employeeDetails[n].designation}">
    <label class="modalLabel" for="experience1">Experience(in years): </label>
    <input type="text" id="experience1" value="${employeeDetails[n].experience}">
    <label class="modalLabel" for="salary1">Salary: </label>
    <input type="text" id="salary1" value="${employeeDetails[n].salary}">
    <label class="modalLabel" for="skills">Skills: </label>
    <div class="dropdown" id="list1" onclick="openDropDown(1)">
        <input id="dropdownSelect1" class = "dropdownSelect" placeholder="Select skills" readonly="true">
        <div id="viewSkills" class="dropdown-content">
            <ul class="skillList items">
            </ul>
        </div>
    </div>`

    // function test()
    // {
    //     viewOverlay.className = 'modal';
    //     if(edited)
    //     viewModal.replaceChild(details,editDetails) 
    // }

    editButton.onclick = function(){ 
        viewModal.replaceChild(editDetails,details)
        edited=true
        skillList = Array.from(document.getElementsByClassName('skillList'))
        for(let skillObj of employeeSkills)
        {
            let newSkill=document.createElement('li')
            newSkill.innerHTML=`<span><input type="checkbox" id="edit${skillObj.skillId}"/></span><label for="edit${skillObj.skillId}">${skillObj.skill}</label>`
            skillList.forEach(x=>x.appendChild(newSkill))
        }
        okButton.classList.add('soloModalButton') 
        document.getElementById('viewModalButtons').removeChild(editButton)
    }
    okButton.onclick = function () { 
        viewOverlay.className = 'modal';   
        let rowArray=table.rows
        let editedSkillIDs=Array.from(skillList[2].getElementsByTagName('INPUT')).filter(ch => ch.checked).map(inputElement => inputElement.id)    
        if(edited)
        {   
            for(let key in employeeDetails[n])
            {
                if(key=="skills")
                {
                    // employeeDetails[n]["skills"]=editedSkillIDs
                    continue
                }
                employeeDetails[n][key]=document.getElementById(`${key}1`).value
            }
            employeeDetails[n]["skills"]=[]
            let editedSkillArray = []
            for (let id of editedSkillIDs) {
                employeeSkills.forEach(skillobj => {
                    if (id == `edit${skillobj.skillId}`)
                    {
                        employeeDetails[n]["skills"].push(skillobj.skillId)
                        editedSkillArray.push(skillobj.skill)
                    }
                })
            }
            console.log(editedSkillArray);
            skillArray = editedSkillArray
            viewModal.replaceChild(details,editDetails)
            okButton.classList.remove('soloModalButton') 
            document.getElementById('viewModalButtons').insertBefore(editButton,okButton)
            rowArray[n+1].getElementsByTagName('TD')[0].innerHTML=Number(employeeDetails[n]['empID'])
            rowArray[n+1].getElementsByTagName('TD')[1].innerHTML=employeeDetails[n]['empName']
            rowArray[n+1].getElementsByTagName('TD')[2].innerHTML=employeeDetails[n]['department']
            rowArray[n+1].getElementsByTagName('TD')[3].innerHTML=employeeDetails[n]['designation']
            rowArray[n+1].getElementsByTagName('TD')[4].innerHTML=Number(employeeDetails[n]['salary'])
            rowArray[n+1].getElementsByTagName('TD')[5].innerHTML=editedSkillArray
        }       
        console.log(employeeDetails);
        viewOverlay.className = 'modal';
    }
    closeButton.onclick = function () {
        viewOverlay.className = 'modal';
        if(edited)
        {
            viewModal.replaceChild(details,editDetails)
            okButton.classList.remove('soloModalButton')
            document.getElementById('viewModalButtons').insertBefore(editButton,okButton)
        }
    }
    window.onclick = function (event) {
        if (event.target == viewOverlay) {
            viewOverlay.className = 'modal';
            if(edited)
                viewModal.replaceChild(details,editDetails)
                okButton.classList.remove('soloModalButton')
                document.getElementById('viewModalButtons').insertBefore(editButton,okButton)
        }
    }
}
