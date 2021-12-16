import React from 'react'
import "./advantage.css"
export default function AdvantageCompo(props) {
    return (
        <div className='flexContainer'>
            <div className='flexLine'>
            <img src={props.img} width={200}/>
                
            </div>
            <p className="textClass">{props.desc}</p>
        </div>
    )
}
