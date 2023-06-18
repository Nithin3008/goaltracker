import { createContext, useContext, useState } from "react"

export const goalsData=[
    {
        id:1,
        habbit:"Gym",
        repeat:"Daily",
        Goal:"1 time daily",
        time_of_day:"morninig",

    },
    {
        id:2,
        habbit:"walking",
        repeat:"Daily",
        Goal:"1 time daily",
        time_of_day:"evening",
        
    },
    {
        id:3,
        habbit:"Games",
        repeat:"Daily",
        Goal:"2 time daily",
        time_of_day:"Anytime",
        
    }, 
    {
        id:4,
        habbit:"Code",
        repeat:"Daily",
        Goal:"3 time daily",
        time_of_day:"Anytime",
        
    }
]
export const DataContext=createContext()
export function DataProvider({children})
{
    const [Goals,setGoals]=useState(goalsData)

    return(<>
        <DataContext.Provider value={{Goals}}>{children}</DataContext.Provider>
    </>)
}