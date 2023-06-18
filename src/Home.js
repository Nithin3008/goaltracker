import {useContext, useState} from "react"
import  {goalsData} from "./intialData"
import { DataContext } from "./intialData"
export function Home1()
{
    const [showHabit,setHabit]=useState(false)
    console.log(goalsData)
    const {Goals}=useContext(DataContext)
    const data=[...Goals]
    function submitForm(event)
    {
        event.preventDefault();
        console.log(event.target.goals.value)
        const newHabbit={
        habbit:event.target.habbitName.value,
        repeat:event.target.repeat.value,
        Goal:event.target.goals.value,
        time_of_day:event.target.startDate.value
        }
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
                        <select id="timing">
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
            {data.map((val)=><ul>
                <li>{val.habbit}</li>
                <button>Edit</button>
                <button>Move To Archive</button>
                <button>Trash</button>
            </ul>)}
        </section>
    </div>)
}