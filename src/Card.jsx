import React from "react";
import "./Card.css"
function Card (props)
{
    return (
        <div className="Card">
            <img src= {props.image} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.job}</p>
        </div>
    )
}


export default Card;