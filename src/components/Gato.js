import React from "react";
import "./Gato.css"


/*
props:
    -name 
    -look 

states:
    -actividad
    -Hambre

Comportamiento:
    -maullar
    -Alimentar
    -Acariciar

*/
export default function Gato(props){
    
    const [activity, setActivity] = React.useState("sleeping");
    const [hungry, setHungry] = React.useState("hambriento"); //satisfy

    const Maullar = function(){
        alert("miau")
    }

    const feed = () =>{
        setHungry("satify")
    }

    return(
        <div>
            <img className="photo" src={props.look} alt=""/>
            <h2>The name of the cat is: {props.name}</h2>
            <p>{props.name} is {activity} and it's {hungry}</p>
            <button onClick={() => Maullar()}>Acariciar</button>
            <button onClick={() => feed()}>Feed</button>
        </div>
    );



}