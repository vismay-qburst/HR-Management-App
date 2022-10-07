// let filterButton = document.getElementById('filterButton')

filterButton.addEventListener('click',(event => {
    let filterSkillIDs=Array.from(skillList[0].getElementsByTagName('INPUT')).filter(ch => ch.checked).map(inputElement => inputElement.id)
    if(filterSkillIDs.length==0)
    {
        console.log(employeeDetails);
        tableContent.innerHTML=""
        for(let index in employeeDetails)
        {
            let newSkillArray=[]
            for(let id of employeeDetails[index]["skills"])
            {
                employeeSkills.forEach(skillobj => {
                    if (id == `${skillobj.skillId}`)
                        newSkillArray.push(skillobj.skill)
                })
            }
            let newRow = tableContent.insertRow()
            newRow.insertCell().innerHTML = Number(employeeDetails[index]['empID'])
            newRow.insertCell().innerHTML = employeeDetails[index]['empName']
            newRow.insertCell().innerHTML = employeeDetails[index]['department']
            newRow.insertCell().innerHTML = employeeDetails[index]['designation']
            newRow.insertCell().innerHTML = Number(employeeDetails[index]['salary'])
            newRow.insertCell().innerHTML = newSkillArray
            newRow.insertCell().innerHTML = `<div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${index})"><i class="material-icons">visibility</i>+</button>
            <button class="buttonStyle actionButton" onclick="deleteEmployee(${index})"><i class="material-icons">delete</i></button></td></div>`
        }
    }
    else 
    {
        let employeeDetailsCopy=employeeDetails
        employeeDetails=[]
        tableContent.innerHTML=""
        let filterIDs = []
        // let filterSkillArray = []
        for (let id of filterSkillIDs) {
            employeeSkills.forEach(skillobj => {
                if (id == `filter${skillobj.skillId}`) {
                    filterIDs.push(skillobj.skillId)
                    // filterSkillArray.push(skillobj.skill)
                }
            })
        }
        console.log(employeeDetailsCopy);
        for(let employee of employeeDetailsCopy)
        {
            let skillFlag=0
            // console.log(employee["skills"]);
            for(let filterSkill of filterIDs)
            {
                // console.log(employee["skills"]);
                // console.log(filterSkill);
                if(employee["skills"].includes(filterSkill))
                    skillFlag++
            }
            if(skillFlag===filterIDs.length)
                employeeDetails.push(employee)
        }
        console.log(employeeDetails);
        for(let filteredIndex in employeeDetails)
        {
            let newSkillArray=[]
            for (let id of employeeDetails[filteredIndex]["skills"])
            {
                employeeSkills.forEach(skillobj => {
                    if (id == `${skillobj.skillId}`)
                        newSkillArray.push(skillobj.skill)
                })
            }
            let newRow = tableContent.insertRow()
            newRow.insertCell().innerHTML = Number(employeeDetails[filteredIndex]['empID'])
            newRow.insertCell().innerHTML = employeeDetails[filteredIndex]['empName']
            newRow.insertCell().innerHTML = employeeDetails[filteredIndex]['department']
            newRow.insertCell().innerHTML = employeeDetails[filteredIndex]['designation']
            newRow.insertCell().innerHTML = Number(employeeDetails[filteredIndex]['salary'])
            newRow.insertCell().innerHTML = newSkillArray
            newRow.insertCell().innerHTML = `<div class="flexbox tableButtons"><button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${filteredIndex})"><i class="material-icons">visibility</i>+</button>
            <button class="buttonStyle actionButton" onclick="deleteEmployee(${filteredIndex})"><i class="material-icons">delete</i></button></td></div>`
        }
        employeeDetails=employeeDetailsCopy
    }
})
)