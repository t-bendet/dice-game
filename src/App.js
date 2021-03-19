import React from "react";
import "./styles/App.css";
import ScoreBoard from './ScoreBoard'
import PlayerCard from './PlayerCard'
import Dices from './Dices'

const randomeNum =() => Math.ceil(Math.random() * 6)
class App extends React.Component {
  state={targetScore:100,p1Total:0,p1Current:0,p2Total:0,p2Current:0,}
  targetScoreSubmit=(s)=> {
   this.setState((perv)=>{
    return perv.targetScore = parseInt(s)
   })
  }
  restartGame = () =>{
    window.location.reload()
  }
  holdFunction=()=>{
    console.log("holding");
  }
  rollFunction=()=>{
    console.log("rolling");
  }  
  render() {
    return (
      <div className="container">
        <ScoreBoard onSubmit={this.targetScoreSubmit} restart={this.restartGame}/>
        <div className="game-area">
        <PlayerCard total={this.state.p1Total} current={this.state.p1Current}/>
        <Dices target={this.state.targetScore} hold={this.holdFunction} roll={this.rollFunction} />
        <PlayerCard total={this.state.p2Total} current={this.state.p2Current}/>
        </div>
      </div>
    );
  } 
}
export default App;


