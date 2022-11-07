import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Table from './Components/EmployeeTable/EmployeeTable';
import TableOperations from './Components/TableOperations/TableOperations';

let employeeDetails = []
let employeeSkills = []

let getData = () => {
    fetch("data/employee.json")
        .then(res => res.json())
        .then(obj => {employeeDetails=obj
        console.log(employeeDetails);})
}
let getSkills = () => {
    fetch("data/skills.json")
        .then(res => res.json())
        .then(obj => {
            obj.forEach((item, index) => {
                employeeSkills[index] = item
            })
        })
    getData()
}

getSkills()


const Main = () => {
  return(
    <main className='flexbox'>
      <TableOperations />
      <div className='tableContainer'>
        <Table employeeDetails={employeeDetails} skills={employeeSkills}/>
      </div>
   </main>
  )
}
const App = () => {
  return (
   <>
   <Header />
   <Main />
   <Footer />
   </>
  );
}

export default App;
