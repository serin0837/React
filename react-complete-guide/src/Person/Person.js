import React from "react"
import "./Person.css"

// ex6 function

const person = (props) => {
    return (
    <div className ="Person">
    <p onClick = {props.click}>I am a {props.name} person and I am {props.age}  years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange ={props.changed} value ={props.name}/> 
    </div>
    )
}

export default person 


