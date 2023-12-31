import {useContext, useState} from "react"
import { useNavigate} from "react-router-dom"
import  {goalsData} from "./intialData"
import { DataContext } from "./intialData"
import { v4 as uuidv4 } from 'uuid';
export function Home1()
{
    const [showHabit,setHabbit]=useState(false)
    const [editHabit,setEdit]=useState({})
    const [editHabit1,setHabit1]=useState(false)
    const [fullGoal,setGoal]=useState({})
    const [showGoal,setShowGoal]=useState(false)
    console.log(goalsData)
    const {Goals,addNewGoal,removeGoal,addToArchive,editGoals}=useContext(DataContext)
    const data=[...Goals]
    const nav=useNavigate()
    function submitForm(event)
    {
        event.preventDefault();
        console.log(event.target.goals.value)
        const newHabbit={
        id:uuidv4(),
        habbit:event.target.habbitName.value,
        repeat:event.target.repeat.value,
        Goal:event.target.goals.value,
        time_of_day:event.target.time_of_day.value,
        date:event.target.startDate.value
        }
        addNewGoal(newHabbit)
        setHabbit(!showHabit)
    }
    function submitForm1(event)
    {
        event.preventDefault();
        const newHabbit={
        id:editHabit.id,
        habbit:event.target.habbitName.value,
        repeat:event.target.repeat.value,
        Goal:event.target.goals.value,
        time_of_day:event.target.time_of_day.value,
        date:event.target.startDate.value
        }
        console.log(newHabbit)
        editGoals(newHabbit)
        setHabit1(!editHabit1)
        

    }
    return(<div>
        <h1>Habbit Tracker</h1>
        <header>
        <button onClick={()=>nav("/Archive1")}>Archive</button><button onClick={()=>setHabbit(!showHabit)}>Add new habbit</button>
        </header>
        <section className="HabbitDetails-main" style={{display:showHabit?"block":"none"}}>
            <div className="HabbitDetails">
            
                <div className="HabbitDetails-collecter">
                    <form onSubmit={(e) => submitForm(e)}>
                        <label>Habbit Name</label>
                        <input id="habbitName" type="text"></input>
                        <label>Repeat</label>
                        <select id="repeat">
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Alternate Days</option>
                            <option>Monthly</option>
                        </select>
                        <label>Goal</label>
                        <select id="goals">
                            <option>1 time daily</option>
                            <option>2 time daily</option>
                            <option>3 time daily</option>
                        </select>
                        <label>Time of Day</label>
                        <select id="time_of_day">
                            <option>Anytime</option>
                            <option>Morning</option>
                            <option>Afternon</option>
                            <option>Evening</option>
                        </select>
                        <label>Start Day</label>
                        <select id="startDate">
                            <option>Today</option>
                            <option>Tomorrow</option>
                            <option>Weekend</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={()=>setHabbit(!showHabit)}>Cancel</button>
                </div>
            </div>
        </section>
        <section className="GoalData">
                <div style={{display:editHabit1?"block":"none"}}>
                <div className="HabbitDetails-collecter editor">
                    <form onSubmit={(e) => submitForm1(e)}>
                        <label>Habbit Name</label>
                        <input id="habbitName" type="text"></input>
                        <label>Repeat</label>
                        <select id="repeat">
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Alternate Days</option>
                            <option>Monthly</option>
                        </select>
                        <label>Goal</label>
                        <select id="goals">
                            <option>1 time daily</option>
                            <option>2 time daily</option>
                            <option>3 time daily</option>
                        </select>
                        <label>Time of Day</label>
                        <select id="time_of_day">
                            <option>Anytime</option>
                            <option>Morning</option>
                            <option>Afternon</option>
                            <option>Evening</option>
                        </select>
                        <label>Start Date</label>
                        <select id="startDate">
                            <option>Today</option>
                            <option>Tomorrow</option>
                            <option>Weekend</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                    <button style={{marginTop:"20px"}} onClick={()=>{setHabit1(!editHabit1)}}>Cancel</button>
                </div></div>
                <div style={{display:showGoal?"block":"none"}}>
                <ul>
                <li>{fullGoal.habbit}</li>
                <li>{fullGoal.repeat}</li>
                <li>{fullGoal.Goal}</li>
                <li>{fullGoal.time_of_day}</li>
                <li>{fullGoal.date}</li>
                <button style={{marginTop:"0px"}} onClick={()=>setShowGoal(!showGoal)}>Cancel</button>
            </ul>
                </div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           {data.map((val)=><ul onClick={()=>{setGoal(val);setShowGoal(!showGoal)}}>
                <li>{val.habbit}</li>
                <button onClick={()=>{setHabit1(!editHabit1);setEdit(val)}}>Edit</button>
                <button onClick={()=>addToArchive(val)}>Move To Archive</button>
                <button onClick={()=>removeGoal(val)}>Trash</button>
            </ul>)}
           </div>
        </section>
    </div>)
}