import Button from "../Button/Button";

export default function SkillList({ selectedSkills,filter,handleCheckBox,employeeSkills,isFilterList })
{
    return(
        <>
        <div className={isFilterList?"filterList dropdown-content":"dropdown-content"}>
            <ul className="skillList items">
                {employeeSkills.map(
                    skill=>
                    <li onClick={e => {e.stopPropagation()}}>
                        <span>
                            <input type="checkbox" id={skill.skillId} value={skill.skillId} defaultChecked={selectedSkills.includes(skill.skillId)} onChange={e => handleCheckBox(e)}/>
                        </span>
                        <label for={skill.skillId}>{skill.skill}</label>
                    </li>
                )}
                {isFilterList?<li className="filterMenuButton"><Button buttonClass={"buttonStyle filterButton"} buttonText={<strong>Filter</strong>} onClick={() => filter()}/></li>:null}
            </ul>
        </div>
        </>
    )
}