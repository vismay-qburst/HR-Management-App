import { useEffect } from "react";

export default function Skills()
{
    const getEmployeeData = async() => {
        const response = await fetch(`data/skills.json`)
        const empSkills = await response.json()
        console.log(2,empSkills);
    }
    
    useEffect(() => {
        getEmployeeData()
    },[])

}