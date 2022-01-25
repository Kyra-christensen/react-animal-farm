import React from 'react';
import Animal from './Animal/Animal.js';

export default function AnimalList(props) {
  return <div>
    {props.animals.map((animal, i) => 
      <Animal key={animal.name + i} name={animal.name} type={animal.type} says={animal.says} left={animal.left} top={animal.top} />)}
  </div>;
}
