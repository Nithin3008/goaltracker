import { useContext } from "react";
import { DataContext } from "./intialData";

export function Archive1()
{
    const {archive}=useContext(DataContext)
    console.log(archive)
    const data=[...archive]
    return(<div className="ArchiveSec">
        <h1>Archive</h1>
        {data.map((val)=><ul>
                <li>{val.habbit}</li>
            </ul>)}
    </div>)
}