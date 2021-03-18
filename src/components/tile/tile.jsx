import React, { Component } from "react";

import "./tile.css";
class Tile extends Component {
  render() {
    let colour = this.props.value === 'X' ? '#8F7A76' : this.props.value === 'O' ? '#D9D3D2' : '#FFFF';
    return (
      <button
        style={{background : colour}}
        className={"tile " + this.props.value}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Tile;
