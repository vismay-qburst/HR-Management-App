import Button from "../Button/Button";

export default function TableOperations()
{
    return (
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
        {/* <button className="addEmployeeButton buttonStyle"><strong>Add employee</strong></button> */}
        <Button buttonClass={"addEmployeeButton buttonStyle"} buttonText={(<strong>Add employee</strong>)} onClick={()=>{alert("Click")}}/>
    </div>
    )
}

