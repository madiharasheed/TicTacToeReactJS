import React, { Component } from "react";

import "./app.css";

import Board from "./components/board/board";
import History from "./components/history/history";
import Info from "./components/info/info";
import StartGame from "./welcome";

import { calculateTie, genericWinnerCalculator } from "./util/util";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ tiles: Array(9).fill(null) }],
      xTurn: true,
      moveNumber: 0,
      isStartGame: false
    };
  }
  /* EventHandler */
  handleClick(i) {
    const historyCopy = this.state.history.slice(0, this.state.moveNumber + 1);
    const currentTilesCopy = historyCopy[historyCopy.length - 1].tiles.slice();
    //if tile is already taken or game is over
    if (currentTilesCopy[i] || genericWinnerCalculator(currentTilesCopy)) {
      return;
    }
    currentTilesCopy[i] = this.state.xTurn ? "X" : "O";
    this.setState({
      history: historyCopy.concat([
        {
          tiles: currentTilesCopy
        }
      ]),
      moveNumber: historyCopy.length,
      xTurn: !this.state.xTurn
    });
  }

  jumpTo(step) {
    this.setState({
      moveNumber: step,
      xTurn: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const tiles = history[this.state.moveNumber].tiles;
    const winner = genericWinnerCalculator(tiles);

    let info;
    if (winner) {
      info = "Winner is player " + winner;
    } else if (calculateTie(tiles)) {
      info = "It is a tie";
    } else {
      info = "Next player is " + (this.state.xTurn ? "X" : "O");
    }

    return (
      <div>
        {this.state.isStartGame ?
          <div className="game">
            <div className="game-info">
              <Info info={info} />
            </div>
            <div className="d-flex justify-content-center game-board">
              <Board tiles={tiles} onClick={i => this.handleClick(i)} />
            </div>
            <div className="d-flex justify-content-center game-history">
              <History 
                history={history} 
                onClick={step => this.jumpTo(step)} 
                onGotoHomeClick={() => this.handleStartGame()}
              />
            </div>
          </div> : 
          <StartGame  onClick={() => this.handleStartGame()}/>
        }
      </div>
    );
  }

  handleStartGame () {
    this.setState({isStartGame: !this.state.isStartGame});
  }
}
export default App;
