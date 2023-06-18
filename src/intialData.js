import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export const goalsData=[
    {
        id:uuidv4(),
        habbit:"Gym",
        repeat:"Daily",
        Goal:"1 time daily",
        time_of_day:"morninig",
        date:"Today"

    },
    {
        id:uuidv4(),
        habbit:"walking",
        repeat:"Daily",
        Goal:"1 time daily",
        time_of_day:"evening",
        date:"Yesterday"
        
    },
    {
        id:uuidv4(),
        habbit:"Games",
        repeat:"Daily",
        Goal:"2 time daily",
        time_of_day:"Anytime",
        date:"Tomrrow"
        
    }, 
    {
        id:uuidv4(),
        habbit:"Code",
        repeat:"Daily",
        Goal:"3 time daily",
        time_of_day:"Anytime",
        date:"Today"
        
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
    function editGoals(goal)
    {
        const x=[...Goals].map((val)=>{
            if(val.id===goal.id)
            {
                return goal
            }
            else
            {
                return val
            }
            
        })
        console.log(x)
        setGoals(x)
    }
    return(<>
        <DataContext.Provider value={{Goals,addNewGoal,removeGoal,addToArchive,archive,editGoals}}>{children}</DataContext.Provider>
    </>)
}