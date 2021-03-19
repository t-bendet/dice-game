import React from "react";
import "./styles/App.css";
import ScoreBoard from './ScoreBoard'
import PlayerCard from './PlayerCard'
import Dices from './Dices'

const randomeNum =() => Math.ceil(Math.random() * 6)
class App extends React.Component {
  state={targetScore:100,p1Total:0,p1Current:0,p1Status:0,
  p2Total:0,p2Current:0,p2Status:0,diceRoll:[0,0],currPlayer:true}
  targetScoreSubmit=(s)=> {
   this.setState((perv)=>{
    return perv.targetScore = parseInt(s)
   })
  }
  restartGame = () =>{
    window.location.reload()
  }
  gameWon = (player)=>{
    if(this.state[`${player}Total`]> this.state.targetScore){
      this.setState({[`${player}Status`]:this.state[`${player}Status`] +1})
      this.setState({...App.defaultProps})
      alert(`you reached ${this.state.targetScore} points!! ${player} is the winner`)
    }
  }
  // switch between players
  holdFunction=()=>{
    let player = this.state.currPlayer? "p1":"p2"
    this.setState({[`${player}Total`]:this.state[`${player}Current`]+this.state[`${player}Total`]},()=>{
      this.gameWon(player)
      this.setState({[`${player}Current`]:0},()=>{
        this.setState({currPlayer:!this.state.currPlayer})
      })
    })
  }
  // updates dices and relavent player 
  rollFunction=()=>{
    this.setState({diceRoll:[randomeNum(),randomeNum()]},()=>{
      this.updatePlayerStat()
    })
  }
  //
  updatePlayerStat = ()=>{
    let total = this.state.diceRoll[0]+this.state.diceRoll[1]
    let player = this.state.currPlayer? "p1":"p2"
    if(total===12){
      this.setState({[`${player}Current`]:0,[`${player}Total`]:0},()=>{
        this.holdFunction()
      })
      
    }else{
      this.setState({[`${player}Current`]:this.state[`${player}Current`]+total})
    }
  }
  render() {
    return (
      <div className="container">
        <ScoreBoard p1={this.state.p1Status} p2={this.state.p2Status} onSubmit={this.targetScoreSubmit} restart={this.restartGame}/>
        <div className="game-area">
        <PlayerCard turn={this.state.currPlayer} player="first" total={this.state.p1Total} current={this.state.p1Current}/>
        <Dices target={this.state.targetScore} hold={this.holdFunction} roll={this.rollFunction} diceRoll={this.state.diceRoll} />
        <PlayerCard turn={!this.state.currPlayer} player="second" total={this.state.p2Total} current={this.state.p2Current}/>
        </div>
      </div>
    );
  } 
}
export default App;


App.defaultProps = {targetScore:100,p1Total:0,p1Current:0,
  p2Total:0,p2Current:0,diceRoll:[0,0],currPlayer:true}