import React from 'react';
import './styles/PlayerCard.css';

class PlayerCard extends React.Component{
  state= {}
  render(){
    return (
      <div className="player">
        <h1>my name is bla bla</h1>
        <div>my score is </div>
        <div>my current score is</div>
      </div>
    )
  }
}

export default PlayerCard