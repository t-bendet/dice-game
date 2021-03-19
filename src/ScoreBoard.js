import React from 'react';
import './styles/ScoreBoard.css';

class ScoreBoard extends React.Component{
  state={targetPoints:100}
  submit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.targetPoints);
  }
  render(){
    return (
      <div className="score-board">
        <div className="status">
          <h2>player 1</h2>
          <h3>rounds won : {this.props.p1}</h3>
        </div>
        <div className="config">
          <form onSubmit={this.submit}>
            <input className="t-score config-defualt" type="number" value={this.state.targetPoints} onChange={e => this.setState({ targetPoints: e.target.value })}/>
            <input className="config-defualt" type="submit" value="set your target score" />
          </form>
          <button className="config-defualt" onClick={this.props.restart}>restart game</button>
        </div>
        <div className="status">
          <h2>player 2</h2>
          <h3>rounds won : {this.props.p2}</h3>
        </div>
      </div>
    )
  }
}

export default ScoreBoard

