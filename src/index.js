import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Square from './Square/Square';
import Board from './Board/Board';

class Game extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  };

  handleClick = (i) => {
    const squares = [...this.state.squares];
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    console.log("clicked", this.state.squares);
  }

  renderSquare = i => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board renderSquare={this.renderSquare} xIsNext={this.state.xIsNext} />
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
