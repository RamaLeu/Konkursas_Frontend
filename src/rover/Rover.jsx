import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import "./Rover.css"

const Rover = () => {
    let [date, selectDate] = useState('2000-01-01');

    let {name} = useParams();
    return (
            <div className="cameraList">
            <h1>{name} Rover</h1>
                <ul>
                    <li>
                        <Link to={"/rover/"+name+"/fhaz/"+date} className="link">Front Hazard Avoidance Camera</Link>
                    </li>
                    <li>
                    <Link to={"/rover/"+name+"/rhaz/"+date} className="link">Rear Hazard Avoidance Camera</Link>
                    
                    </li>
                    <li>
                    {name ==="Curiosity"?<Link to={"/rover/"+name+"/mast/"+date} className="link">Mast Camera</Link>: <div></div>}
                    </li>
                    <li>
                    {name ==="Curiosity"?<Link to={"/rover/"+name+"/chemcam/"+date} className="link">Chemistry and Camera Complex</Link>: <div></div>}
                    </li>
                    <li>
                    {name ==="Curiosity"?<Link to={"/rover/"+name+"/mahli/"+date} className="link">Mars Hand Lens Imager</Link>: <div></div>}
                    </li>
                    <li>
                    {name ==="Curiosity"?<Link to={"/rover/"+name+"/mardi/"+date} className="link">Mars Descent Imager</Link>: <div></div>}
                    </li>
                    <li>
                    {name ==="Curiosity"?<Link to={"/rover/"+name+"/navcam/"+date} className="link">Navigation Camera</Link>: <div></div>}
                    </li>
                    <li>
                    {name !=="Curiosity"?<Link to={"/rover/"+name+"/pancam/"+date} className="link">Panoramic Camera</Link>: <div></div>}
                    </li>
                    <li>
                    {name !=="Curiosity"?<Link to={"/rover/"+name+"/minites/"+date} className="link">Miniature Thermal Emission Spectrometer (Mini-TES)</Link> : <div></div>}
                    </li>
                </ul>
                <label for="date">Select date</label>
                <input type="date" onChange={(e) =>{selectDate(e.target.value)}} name="date"id="date" class="date"/>
            </div>
    )
}

export default Rover
