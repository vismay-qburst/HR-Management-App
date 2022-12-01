export default function deleteEmployee(n,employeeDetails) {
    employeeDetails.splice(n, 1)
    return employeeDetails
}