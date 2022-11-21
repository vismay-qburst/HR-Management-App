import deleteEmployee from "../../Utils/delete"


export default function ConfirmDeleteModal({setEmployeeDetails,employeeDetails,index,closeDeleteModal}) {
    return (
        <>
            <div id="deleteEmployeeOverlay" class="modalOpen" onClick={closeDeleteModal}>
                <div id="deleteEmployeeModal" class="modalContent" onClick={(e)=>{e.stopPropagation()}}>
                    <span class="close" onClick={closeDeleteModal}>&times;</span>
                    <h2 class="heading">Delete Employee#{employeeDetails[index].empID} - {employeeDetails[index].empName}?</h2>
                    <p>All data corresponding to this employee will be removed. Are you sure you want to delete this
                        employee?</p>
                    <div id="deleteModalButtons" class="modalButtonContainer flexbox">
                        <button class="buttonStyle" id="deleteConfirmButton"
                            onClick={()=>{setEmployeeDetails(deleteEmployee(closeDeleteModal,index,employeeDetails))}}><strong>Delete</strong></button>
                        <button class="buttonStyle" id="cancelButton"
                            onClick={closeDeleteModal}><strong>Cancel</strong></button>
                    </div>
                </div>
            </div>
        </>
    )
}