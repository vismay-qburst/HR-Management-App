import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function TableOperations({ filterList, openModal, openList, renderSkillList })
{
    return (
    <>
        <div className="tableOperations flexbox">
        <div className="dropdown filterTable list2" onClick={()=>{openList('filter')}}>
            Filter
            <i className="fa fa-filter"></i>
            {filterList?renderSkillList('isFilter'):null}
        </div>
        <Link to={"/table/add-employee"}><Button buttonClass={"addEmployeeButton buttonStyle"} buttonText={(<strong>Add employee</strong>)}/></Link>
        </div>
    </>
    )
}

