import { useState } from "react";
import Button from "../Button/Button";

export default function Modal({selectedSkills,employeeSkills,setActionType, actionType, handleUpdate, close, employee, openList, renderSkillList})
{
    const isAdd = (actionType==='add')
    const isDelete = (actionType==='delete')
    const isEdit = (actionType==='edit')
    const isEditable = isAdd || isEdit
    const [emp,setEmp] = useState(employee)
    const getSkillArray = (skillIndices) => {
        let skillArray = []
        employeeSkills.forEach(skillObj => {
            if (skillIndices.includes(skillObj.skillId))
                skillArray.push(skillObj.skill)
        })
        return skillArray
    }
    return(
        <>
            <div className="modalOpen" onClick={close}>
                <div className="modalContent" onClick={(e)=>{e.stopPropagation()}}>
                    <span className="close" onClick={close}>&times;</span>
                    {isAdd?<h2 className="heading">Add employee</h2>:isDelete?<h2 className="heading">Delete Employee#{emp.empID} - {emp.empName}?</h2>:<h2 className="heading">Employee#{emp.empID} - {emp.empName}</h2>}
                    {isDelete?
                    <p>All data corresponding to this employee will be removed. Are you sure you want to delete this
                    employee?</p>
                    :
                    <div className="details formContainer">
                        <label class={isEditable?"modalLabel requiredField":"modalLabel"} for="empID">Employee ID: </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="empID" value={emp.empID} onChange={(e)=>setEmp({ ...emp, empID: e.target.value })}/>
                        <label class={isEditable?"modalLabel requiredField":"modalLabel"} for="empName">Employee Name: </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="empName" value={emp.empName} onChange={(e)=>setEmp({ ...emp, empName: e.target.value })}/>
                        <label class="modalLabel" for="age">Age: </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="age" value={emp.age} onChange={(e)=>setEmp({ ...emp, age: e.target.value })}/>
                        <label class="modalLabel" for="contactNumber">Contact number: </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="contactNumber" value={emp.contactNumber} onChange={(e)=>setEmp({ ...emp, contactNumber: e.target.value })}/>
                        <label class="modalLabel" for="emailID">E-mail ID: </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="emailID" value={emp.emailID} onChange={(e)=>setEmp({ ...emp, emailID: e.target.value })}/>
                        <label class={isEditable?"modalLabel requiredField":"modalLabel"} for="department">Department: </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="department" value={emp.department} onChange={(e)=>setEmp({ ...emp, department: e.target.value })}/>
                        <label class={isEditable?"modalLabel requiredField":"modalLabel"} for="designation">Designation: </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="designation" value={emp.designation} onChange={(e)=>setEmp({ ...emp, designation: e.target.value })}/>
                        <label class="modalLabel" for="experience">Experience(in years): </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="experience" value={emp.experience} onChange={(e)=>setEmp({ ...emp, experience: e.target.value })}/>
                        <label class={isEditable?"modalLabel requiredField":"modalLabel"} for="salary">Salary: </label>
                        <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="salary" value={emp.salary} onChange={(e)=>setEmp({ ...emp, salary: e.target.value })}/>
                        <label class={isEditable?"modalLabel requiredField":"modalLabel"} for="skills">Skills: </label>
                        <div className="dropdown" onClick={()=>{openList()}}>
                            <input readOnly={!isEditable} type="text" class={isEditable?null:"readOnlyField"} id="skills" value={isEditable?"Select skills":getSkillArray(emp.skills)}/>
                            {isEditable?renderSkillList():null}
                        </div>
                    </div>
                    }
                    {isDelete?
                    <div id="deleteModalButtons" class="modalButtonContainer flexbox">
                        <button class="buttonStyle" id="deleteConfirmButton"
                            onClick={()=>{handleUpdate()}}><strong>Delete</strong></button>
                        <button class="buttonStyle" id="cancelButton"
                            onClick={close}><strong>Cancel</strong></button>
                    </div>
                    :
                    <div className={isEditable?"soloModalButton modalButtonContainer flexbox":"viewModalButtons modalButtonContainer flexbox"}>
                        {isEditable?null:<Button buttonClass={"buttonStyle editButton"} buttonText={(<strong>Edit</strong>)} onClick={()=>{setActionType('edit')}}/>}
                        <Button buttonClass={isAdd?"buttonStyle addButton":"buttonStyle okButton"} buttonText={isAdd?(<strong>Add</strong>):(<strong>OK</strong>)} onClick={()=>{handleUpdate({ ...emp, skills: [...selectedSkills] })}}/>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}