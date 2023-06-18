import {useContext, useState} from "react"
import  {goalsData} from "./intialData"
import { DataContext } from "./intialData"
export function Home1()
{
    const [showHabit,setHabit]=useState(false)
    const [editHabit,setEdit]=useState({})
    const [editHabit1,setHabit1]=useState(false)
    console.log(goalsData)
    const {Goals,addNewGoal,removeGoal,addToArchive}=useContext(DataContext)
    const data=[...Goals]
    function submitForm(event)
    {
        event.preventDefault();
        console.log(event.target.goals.value)
        const newHabbit={
        habbit:event.target.habbitName.value,
        repeat:event.target.repeat.value,
        Goal:event.target.goals.value,
        time_of_day:event.target.time_of_day.value,
        date:event.target.startDate.value
        }
        addNewGoal(newHabbit)
        console.log(newHabbit)
    }
    function submitForm1(event)
    {
        event.preventDefault();
        console.log(event.target.goals.value)
        const newHabbit={
        habbit:editHabit.habbit?editHabit.habbit:event.target.habbitName.value,
        repeat:editHabit.repeat?editHabit.repeat:event.target.repeat.value,
        Goal:editHabit.goals?editHabit.goals:event.target.goals.value,
        time_of_day:editHabit.time_of_day?editHabit.time_of_day:event.target.time_of_day.value,
        date:editHabit.date?editHabit.data:event.target.startDate.value
        }
        console.log(newHabbit)
    }
    return(<div>
        <h1>Habbit Tracker</h1>
        <section>
           
            <div className="HabbitDetails">
            <button>Add new habbit</button>
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
                        <label>Start Date</label>
                        <input  type="date" id="startDate"></input>
                        <button type="submit">Submit</button>
                    </form>
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
                        <input  type="date" id="time_of_day"></input>
                        <button type="submit">Submit</button>
                    </form>
                </div></div>
           <div style={{display:"flex"}}>
           {data.map((val)=><ul>
                <li>{val.habbit}</li>
                <button onClick={()=>{setHabit1(!editHabit1);setEdit(val)}}>Edit</button>
                <button onClick={()=>addToArchive(val)}>Move To Archive</button>
                <button onClick={()=>removeGoal(val)}>Trash</button>
            </ul>)}
           </div>
        </section>
    </div>)
}