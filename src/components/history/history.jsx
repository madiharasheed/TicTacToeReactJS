import React, { Component } from "react";

import "./history.css";

class History extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const description = "Restart Game";
    const desc = "Go To Home Page"
    const moveNumber = 0;
    return (
      <div>
        <button onClick={() => this.props.onClick(moveNumber)}>
          {description}
        </button>&nbsp;
        
        <button onClick={() => this.props.onGotoHomeClick()}>
          {desc}
        </button>
      </div>
    );    
  }
}

export default History;
