function sortTable(columnIndex)
{
  let rows, switching, i, shouldSwitch, flag = 0;
  let table = document.getElementById("employeeTable");
  switching = true;
  let direction = "ascending"; 
  while (switching) 
  {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) 
    {
      shouldSwitch = false;
      let dataElement = rows[i].getElementsByTagName("TD")[columnIndex];
      let adjacentDataElement = rows[i + 1].getElementsByTagName("TD")[columnIndex];
      if (direction == "ascending") 
      {
        if ((columnIndex!==4 && dataElement.innerHTML.toLowerCase() > adjacentDataElement.innerHTML.toLowerCase()) || (columnIndex==4 && Number(dataElement.innerHTML)>Number(adjacentDataElement.innerHTML))) 
        {
          shouldSwitch= true;
          break;
        }
      } 
      else if (direction == "descending") 
      {
        if ((columnIndex!==4 && dataElement.innerHTML.toLowerCase() < adjacentDataElement.innerHTML.toLowerCase()) || (columnIndex==4 && Number(dataElement.innerHTML)<Number(adjacentDataElement.innerHTML))) 
        {
          shouldSwitch = true;
          break;
        }
      }
    }
    if(shouldSwitch) 
    {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

      [employeeDetails[i],employeeDetails[i-1]]=[employeeDetails[i-1],employeeDetails[i]]
      rows[i].getElementsByTagName("TD")[6].innerHTML=`<button class="buttonStyle actionButton" onclick="deleteEmployee(${i-1})"><i class="material-icons">delete</i>${i-1}</button> <button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${i-1})"><i class="material-icons">visibility</i>${i-1}</button>`
      rows[i+1].getElementsByTagName("TD")[6].innerHTML=`<button class="buttonStyle actionButton" onclick="deleteEmployee(${i})"><i class="material-icons">delete</i>${i}</button> <button class="buttonStyle actionButton" onclick="viewEmployeeDetails(${i})"><i class="material-icons">visibility</i>${i}</button>`

      switching = true;
      flag=1;      
    } 
    else 
    {
      if (flag == 0 && direction == "ascending") {
        direction = "descending";
        switching = true;
      }
    }
  }
  console.log(employeeDetails);
}