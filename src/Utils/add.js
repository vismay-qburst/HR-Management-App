export default function addEmployee(tableEntries,employeeDetails,emp,close)
{
    let mandatoryFieldsEmpty=false
    tableEntries.forEach(key=>{
        if(!emp[key])
            mandatoryFieldsEmpty=true
    })
    if(mandatoryFieldsEmpty)
        alert("Please fill all mandatory fields")
    else
    {
    emp.skills=[]
    employeeDetails.push(emp)
    close()
    return employeeDetails
    }
    return employeeDetails
}