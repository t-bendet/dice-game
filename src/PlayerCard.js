import React from 'react';
import './styles/PlayerCard.css';

const PlayerCard = (props)=>{
    return (
      <div className="player">
        <h1>{props.player} player</h1>
        <h2>total score : {props.total}</h2>
        <h2>current score: {props.current}</h2>
        {props.turn && <h3 className="box-shade">current</h3>}
      </div>
    )
}

export default PlayerCard