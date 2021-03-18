import React from "react";
import "./styles/App.css";
import ScoreBoard from './ScoreBoard'
import PlayerCard from './PlayerCard'
import Dice from './Dice'



class App extends React.Component {
  state={inPlay:false}
  render() {
    return (
      <div className="container">
        <ScoreBoard/>
        <div className="game"> 
          <PlayerCard/>
          <Dice/>
          <PlayerCard/>
        </div>
      </div>
    );
  }
}
export default App;
