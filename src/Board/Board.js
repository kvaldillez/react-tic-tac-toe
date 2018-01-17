import React from 'react';

const board = (props) => {
    return (
        <div>
        <div className="board-row">
            {props.renderSquare(0, props.squares)}
            {props.renderSquare(1, props.squares)}
            {props.renderSquare(2, props.squares)}
        </div>
        <div className="board-row">
            {props.renderSquare(3, props.squares)}
            {props.renderSquare(4, props.squares)}
            {props.renderSquare(5, props.squares)}
        </div>
        <div className="board-row">
            {props.renderSquare(6, props.squares)}
            {props.renderSquare(7, props.squares)}
            {props.renderSquare(8, props.squares)}
        </div>
        </div>
    );
}

export default board;