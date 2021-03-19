import React from 'react';
import './styles/PlayerCard.css';

const PlayerCard = (props)=>{
    return (
      <div className="player">
        <h1>my name is bla bla</h1>
        <div>{props.total}</div>
        <div>{props.current}</div>
      </div>
    )
}

export default PlayerCard