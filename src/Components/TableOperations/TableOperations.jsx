export default function TableOperations()
{
    return (
    <div className="tableOperations flexbox">
        <div className="dropdown filterTable list2" onclick="openDropDown(2)">
            Filter
            <i className="fa fa-filter"></i>
            <div className="filterList dropdown-content">
                <ul className="skillList items">
                    <li className="filterMenuButton">
                        <button className="buttonStyle filterButton"><strong>Filter</strong></button></li>
                </ul>
            </div>
        </div>
        <button className="addEmployeeButton buttonStyle"><strong>Add employee</strong></button>
        <div className="addEmployeeOverlay modal">
            <div className="addEmployeeModal modalContent">
                <span className="close">&times;</span>
                <h2 className="heading">Add employee</h2>
                <div className="addModalButton modalButtonContainer flexbox">
                    <button className="buttonStyle" onclick="addEmployee()"><strong>Add employee</strong></button>
                </div>
            </div>
        </div>
    </div>
    )
}

