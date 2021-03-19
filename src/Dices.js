import React from 'react';
import './styles/Dices.css';

const intToWords = [" ","one",'two',"three","four","five","six"]
const diceClassName = (num)=>{
  return `fas fa-dice-${intToWords[num]}`
}
//fa-pulse 

function Dices(props) {
  let x = props.diceRoll[0] 
  let z = props.diceRoll[1]
  return (
    <div className='dice-con'>
      <h2>target: {props.target}</h2>
      <div className="dice"><i class={diceClassName(x)}></i></div>
      <div className="dice"><i class={diceClassName(z)}></i></div>
      <div className="dice-btns">
        <button className="btn" onClick={props.hold}>hold</button>
        <button className="btn" onClick={props.roll}>roll</button>
      </div>
    </div>
  );
}

export default Dices;
