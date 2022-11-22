export default function editEmployeeDetails(tableEntries,index,close,emp,employeeDetails) {
    let mandatoryFieldsEmpty=false
    tableEntries.forEach(key=>{
        if(!emp[key])
            mandatoryFieldsEmpty=true
    })
    if(mandatoryFieldsEmpty)
        alert("Please fill all mandatory fields")
    else
    {
    employeeDetails[index]=emp
    close()
    return employeeDetails
    }
    return employeeDetails
}