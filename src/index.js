import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Square from './Square/Square';
import Board from './Board/Board';

class Game extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board renderSquare={this.renderSquare} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
