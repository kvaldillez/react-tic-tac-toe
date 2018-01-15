import React from 'react';

const board = (props) => {
    const status = "Next player: X";

    return (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {props.renderSquare(0)}
            {props.renderSquare(1)}
            {props.renderSquare(2)}
        </div>
        <div className="board-row">
            {props.renderSquare(3)}
            {props.renderSquare(4)}
            {props.renderSquare(5)}
        </div>
        <div className="board-row">
            {props.renderSquare(6)}
            {props.renderSquare(7)}
            {props.renderSquare(8)}
        </div>
        </div>
    );
}

export default board;