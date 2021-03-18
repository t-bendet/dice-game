import React from 'react';
import './styles/ScoreBoard.css';

class ScoreBoard extends React.Component{
  state= {}
  render(){
    return (
      <div className="score-board">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    )
  }
}

export default ScoreBoard