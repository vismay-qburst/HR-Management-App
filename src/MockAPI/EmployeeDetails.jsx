import { useEffect } from "react";

export default function EmployeeData()
{
    let empData=[]
    const getEmployeeData = async() => {
        await fetch(`data/employee.json`)
            .then(res => res.json())
            .then(obj => {empData=obj})
        console.log(1,empData);
    }
    
    useEffect(() => {
        getEmployeeData()
    },[])

    console.log(121, empData);
}