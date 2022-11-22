import { useState } from "react";
import addEmployee from "../../Utils/add";
import editEmployeeDetails  from "../../Utils/edit";
import Button from "../Button/Button";

export default function Modal({tableEntries,isAdd,index,setEmployeeDetails,employeeDetails,close,employee})
{
    console.log(isAdd);
    const [isEdit, setIsEdit] = useState(false)
    const flag = isAdd || isEdit
    console.log("Flag:",flag);
    const [emp,setEmp] = useState(employee)
    console.log(emp)
    return(
        <>
            <div className="viewEmployeeOverlay modalOpen" onClick={close}>
                <div className="viewEmployeeModal modalContent" onClick={(e)=>e.stopPropagation()}>
                    <span className="close" onClick={close}>&times;</span>
                    {isAdd?<h2 className="heading">Add employee</h2>:<h2 className="heading">Employee#{emp.empID} - {emp.empName}</h2>}
                    <div className="details formContainer">
                        <label class={flag?"modalLabel requiredField":"modalLabel"} for="empID">Employee ID: </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="empID" value={emp.empID} onChange={(e)=>setEmp({ ...emp, empID: e.target.value })}/>
                        <label class={flag?"modalLabel requiredField":"modalLabel"} for="empName">Employee Name: </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="empName" value={emp.empName} onChange={(e)=>setEmp({ ...emp, empName: e.target.value })}/>
                        <label class="modalLabel" for="age">Age: </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="age" value={emp.age} onChange={(e)=>setEmp({ ...emp, age: e.target.value })}/>
                        <label class="modalLabel" for="contactNumber">Contact number: </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="contactNumber" value={emp.contactNumber} onChange={(e)=>setEmp({ ...emp, contactNumber: e.target.value })}/>
                        <label class="modalLabel" for="emailID">E-mail ID: </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="emailID" value={emp.emailID} onChange={(e)=>setEmp({ ...emp, emailID: e.target.value })}/>
                        <label class={flag?"modalLabel requiredField":"modalLabel"} for="department">Department: </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="department" value={emp.department} onChange={(e)=>setEmp({ ...emp, department: e.target.value })}/>
                        <label class={flag?"modalLabel requiredField":"modalLabel"} for="designation">Designation: </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="designation" value={emp.designation} onChange={(e)=>setEmp({ ...emp, designation: e.target.value })}/>
                        <label class="modalLabel" for="experience">Experience(in years): </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="experience" value={emp.experience} onChange={(e)=>setEmp({ ...emp, experience: e.target.value })}/>
                        <label class={flag?"modalLabel requiredField":"modalLabel"} for="salary">Salary: </label>
                        <input readOnly={!flag} type="text" class={flag?null:"readOnlyField"} id="salary" value={emp.salary} onChange={(e)=>setEmp({ ...emp, salary: e.target.value })}/>
                    </div>
                    <div className="viewModalButtons modalButtonContainer flexbox">
                        {isAdd?
                        <Button buttonClass={"buttonStyle addButton"} buttonText={(<strong>Add</strong>)} onClick={()=>{setEmployeeDetails(addEmployee(tableEntries,employeeDetails,emp,close))}}/>
                        :
                        (
                        <>
                        {isEdit?null:<Button buttonClass={"buttonStyle editButton"} buttonText={(<strong>Edit</strong>)} onClick={()=>{setIsEdit(true)}}/>}
                        <Button buttonClass={"buttonStyle okButton"} buttonText={(<strong>OK</strong>)} onClick={()=>{setEmployeeDetails(editEmployeeDetails(tableEntries,index,close,emp,employeeDetails))}}/>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}