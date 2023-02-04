import React from 'react';
import './descriptions.css'
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop} from "react-icons/md";

function Descriptions(props) {

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown/>,
            title: "min",
            data: props.temp_min,
            unit: '℃'
        },
        {
            id: 2,
            icon: <FaArrowUp/>,
            title: "max",
            data: props.temp_max,
            unit: '℃'
        },
        {
            id: 3,
            icon: <BiHappy/>,
            title: "feels like",
            data: props.feels_like,
            unit: '℃'
        },
        {
            id: 4,
            icon: <MdCompress/>,
            title: "pressure",
            data: props.pressure,
            unit: 'hPa'
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop/>,
            title: "humidity",
            data: props.humidity,
            unit: '%'
        },
        {
            id: 6,
            icon: <FaWind/>,
            title: "wind speed",
            data: props.wind_speed,
            unit: 'm/s'
        }
    ]
  return (
    <div className='section section__descriptions'>
        {cards.map((e)=>(
        <div key={e.id} className="card">
            <div className="description__card-icon">
                {e.icon}
                <small>{e.title}</small>
            </div>
            <h2>{`${e.data} ${e.unit}`}</h2>
        </div> 
        ))}
        
    </div>
  )
}

export default Descriptions
