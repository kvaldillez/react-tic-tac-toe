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

    if(this.calculateWinner(squares) || squares[i]){
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    console.log("clicked", this.state.squares);
  }

  renderSquare = (i) => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  };

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;

    if(winner){
      status = 'Winner: '+winner;
    } else {
      status = 'Next player: '+(this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board renderSquare={this.renderSquare} xIsNext={this.state.xIsNext} />
        </div>
        <div className="game-info">
          <div>{ status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
