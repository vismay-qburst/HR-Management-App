function viewEmployeeDetails(n)
{
    let viewOverlay=document.getElementById('viewEmployeeOverlay')
    let viewModal=document.getElementById('viewEmployeeModal')
    let closeButton = document.getElementsByClassName("close")[2];
    let heading=viewModal.getElementsByTagName('H2')[0]
    // console.log(employeeDetails);
    heading.innerHTML=`Employee#${employeeDetails[n].empID} - ${employeeDetails[n].empName}`
    viewOverlay.className = 'modal showModal';
    console.log(employeeDetails[n]);
    let details=document.getElementById('details')
    details.innerHTML=`<label class="modalLabel" for="empID">Employee ID: </label>
    <input readOnly = "true" type="text" id="empID" value="${employeeDetails[n].empID}">
    <label class="modalLabel" for="empName">Employee Name: </label>
    <input readOnly = "true" type="text" id="empName" value="${employeeDetails[n].empName}">
    <label class="modalLabel" for="age">Age: </label>
    <input readOnly = "true" type="text" id="age" value="${employeeDetails[n].age}">
    <label class="modalLabel" for="contactNumber">Contact number: </label>
    <input readOnly = "true" type="text" id="contactNumber" value="${employeeDetails[n].contactNumber}">
    <label class="modalLabel" for="emailID">E-mail ID: </label>
    <input readOnly = "true" type="text" id="emailID" value="${employeeDetails[n].emailID}"> 
    <label class="modalLabel" for="department">Department: </label>
    <input readOnly = "true" type="text" id="department" value="${employeeDetails[n].department}">
    <label class="modalLabel" for="designation">Designation: </label>
    <input readOnly = "true" type="text" id="designation" value="${employeeDetails[n].designation}">
    <label class="modalLabel" for="experience">Experience(in years): </label>
    <input readOnly = "true" type="text" id="experience" value="${employeeDetails[n].experience}">
    <label class="modalLabel" for="salary">Salary: </label>
    <input readOnly = "true" type="text" id="salary" value="${employeeDetails[n].salary}">`
    closeButton.onclick = function () {
        viewOverlay.className = 'modal';
    }
    window.onclick = function (event) {
        if (event.target == viewOverlay) {
            viewOverlay.className = 'modal';
        }
    }
}