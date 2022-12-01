const sortTable = (keyList, employeeDetails, columnIndex) => {
    let key, switching, i, shouldSwitch, switched = 0;
    key=keyList[columnIndex]
    switching = true;
    let direction = "ascending";
    while (switching) {
        switching = false;
        for (i = 0; i < employeeDetails.length-1; i++) {
            shouldSwitch = false;
            let dataElement = employeeDetails[i][key];
            let adjacentDataElement = employeeDetails[i+1][key];
            if (direction == "ascending") {
                if (((columnIndex !== 4 && columnIndex!==0) && dataElement.toLowerCase() > adjacentDataElement.toLowerCase()) || ((columnIndex == 4 || columnIndex == 0) && Number(dataElement) > Number(adjacentDataElement))) {
                    shouldSwitch = true;
                    break;
                }
            }
            else if (direction == "descending") {
                if (((columnIndex !== 4 && columnIndex!==0) && dataElement.toLowerCase() < adjacentDataElement.toLowerCase()) || ((columnIndex == 4 || columnIndex == 0) && Number(dataElement) < Number(adjacentDataElement))) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            [employeeDetails[i+1], employeeDetails[i]] = [employeeDetails[i], employeeDetails[i+1]]
            switching = true;
            switched = 1;
        }
        else {
            if (switched == 0 && direction == "ascending") {
                direction = "descending";
                switching = true;
            }
        }
    }
    return employeeDetails
}

export default sortTable