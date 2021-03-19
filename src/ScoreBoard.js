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
          <h3>player 1</h3>
          <p>rounds won:</p>
          <p>rounds lost:</p>
        </div>
        <div className="config">
          <form onSubmit={this.submit}>
            <input type="number" value={this.state.targetPoints} onChange={e => this.setState({ targetPoints: e.target.value })}/>
            <input type="submit" value="set your target score" />
          </form>
          <button onClick={this.props.restart}>restart game</button>
        </div>
        <div className="status">
          <h3>player 2</h3>
          <p>rounds won:</p>
          <p>rounds lost:</p>
        </div>
      </div>
    )
  }
}
// TODO add design

export default ScoreBoard

