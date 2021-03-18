import React, { Component } from "react";

class StartGame extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                <h3>Welcome to TicTacToe Game</h3>
                <button
                    onClick={() => this.props.onClick()}
                >Start Game
                </button>
            </div>
        );
    }
}

export default StartGame;
