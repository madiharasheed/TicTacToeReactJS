import React, { Component } from "react";

import "./board.css";
import Tile from "../tile/tile";

class Board extends Component {
  renderTile(i) {
    return (
      <Tile value={this.props.tiles[i]} onClick={() => this.props.onClick(i)} />
    );
  }
  // Processing of click
  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
        <div className="board-row">
          {this.renderTile(3)}
          {this.renderTile(4)}
          {this.renderTile(5)}
        </div>
        <div className="board-row">
          {this.renderTile(6)}
          {this.renderTile(7)}
          {this.renderTile(8)}
        </div>
      </div>
    );
  }
}
export default Board;
