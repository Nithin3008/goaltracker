import { createContext, useState } from "react"

export const goalsData=[
    {
        id:1,
        habbit:"Gym",
        repeat:"Daily",
        Goal:"1 time daily",
        time_of_day:"morninig",
        date:"2023-06-03"

    },
    {
        id:2,
        habbit:"walking",
        repeat:"Daily",
        Goal:"1 time daily",
        time_of_day:"evening",
        date:"2023-06-01"
        
    },
    {
        id:3,
        habbit:"Games",
        repeat:"Daily",
        Goal:"2 time daily",
        time_of_day:"Anytime",
        date:"2023-05-21"
        
    }, 
    {
        id:4,
        habbit:"Code",
        repeat:"Daily",
        Goal:"3 time daily",
        time_of_day:"Anytime",
        date:"2023-05-29"
        
    }
]
export const DataContext=createContext()
export function DataProvider({children})
{
    const [Goals,setGoals]=useState(goalsData)
    const [archive,setArchive]=useState([])
    function addNewGoal(goal)
    {
            setGoals([...Goals,goal])
    }
    function removeGoal(goal)
    {
        const x=[...Goals].filter((val)=>val.habbit!==goal.habbit)
        setGoals ([...x])
    }
    function addToArchive(goal)
    {
        const x=[...Goals].find((val)=>val.habbit===goal.habbit)
        const y=[...Goals].filter((val)=>val.habbit!==goal.habbit)
        setArchive([...archive,x])
        setGoals([...y])
    }
    return(<>
        <DataContext.Provider value={{Goals,addNewGoal,removeGoal,addToArchive,archive}}>{children}</DataContext.Provider>
    </>)
}