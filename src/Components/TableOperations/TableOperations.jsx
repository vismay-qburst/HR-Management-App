import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function TableOperations({add})
{
    return (
    <>
        <div className="tableOperations flexbox">
        <div className="dropdown filterTable list2" onClick="openDropDown(2)">
            Filter
            <i className="fa fa-filter"></i>
            <div className="filterList dropdown-content">
                <ul className="skillList items">
                    <li className="filterMenuButton">
                        <button className="buttonStyle filterButton"><strong>Filter</strong></button></li>
                </ul>
            </div>
        </div>
        <Button buttonClass={"addEmployeeButton buttonStyle"} buttonText={(<strong>Add employee</strong>)} onClick={()=>{add(true)}}/>
        </div>
    </>
    )
}

