import React from 'react';
import './Animal.css';
export default function Animal(props) {
  
  return <div className="animal" style={{ left:props.left, top:props.top }}>
    {props.name},
    {props.says},
    <img src={`./images/${props.type}.svg`} />
  </div>;
}
