import React from 'react';
import './Animal.css';
export default function Animal(props) {
  
  return <div className="animal" style={{ left:props.left, top:props.top }}>
    <img src={`./images/${props.type}.svg`} /> 
    <div className="animal-name">{props.name}</div> 
    <div className="animal-says">{props.says}</div>
  </div>;
}
