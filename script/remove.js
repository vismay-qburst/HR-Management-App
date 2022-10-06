function deleteEmployee(n)
{
    let deleteOverlay=document.getElementById('deleteEmployeeOverlay')
    let deleteModal=document.getElementById('deleteEmployeeModal')
    let closeButton = document.getElementsByClassName("close")[1];
    let deleteConfirmButton = document.getElementById('deleteConfirmButton')
    let cancelButton = document.getElementById('cancelButton')
    let heading=deleteModal.getElementsByTagName('H2')[0]
    // console.log(employeeDetails);
    heading.innerHTML=`Delete Employee#${employeeDetails[n].empID} - ${employeeDetails[n].empName}?`
    deleteOverlay.className = 'modal showModal';
    closeButton.onclick = function () {
        deleteOverlay.className = 'modal';
    }
    cancelButton.onclick = function() {
        deleteOverlay.className = 'modal';
    }
    window.onclick = function (event) {
        if (event.target == deleteOverlay) {
            deleteOverlay.className = 'modal';
        }
    }
    let table=document.getElementById('employeeTable')
    deleteConfirmButton.onclick = function() {
        table.deleteRow(n+1)
        let rowArray=table.rows
        for(let rowArrayIndex=n+1;rowArrayIndex<(rowArray.length);rowArrayIndex++)
        {
            rowArray[rowArrayIndex].getElementsByTagName("TD")[6].innerHTML=`
            <button class="buttonStyle actionButton" onclick="deleteEmployee(${rowArrayIndex-1})"><i class="material-icons">delete</i>${rowArrayIndex-1}</button>
            <button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${rowArrayIndex-1})"><i class="material-icons">visibility</i>${rowArrayIndex-1}</button>`
        }
        deleteOverlay.className = 'modal';
        employeeDetails.splice(n,1)    
    }
}

// function closeModal()
// {
//     deleteOverlay.className = 'modal';
// }
