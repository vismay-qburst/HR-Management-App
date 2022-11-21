export default function deleteEmployee(closeDeleteModal,n,employeeDetails) {
    employeeDetails.splice(n, 1)
    closeDeleteModal()
    return employeeDetails
}