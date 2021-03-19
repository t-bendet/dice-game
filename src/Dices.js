import React from 'react';
import './styles/Dices.css';

function Dices(props) {
  return (
    <div className='dice-con'>
      <div>{props.target}</div>
      <div className="dice">2</div>
      <div className="dice">5</div>
      <div className="dice-btns">
        <button onClick={props.hold} >hold</button>
        <button onClick={props.roll} >roll</button>
      </div>
    </div>
  );
}

export default Dices;
