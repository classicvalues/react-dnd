import React from 'react';
import BoardSquare from './BoardSquare';
import { Piece } from './Piece';
/** Styling properties applied to the board element */
const boardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
};
/** Styling properties applied to each square element */
const squareStyle = { width: '12.5%', height: '12.5%' };
/**
 * The chessboard component
 * @param props The react props
 */
const Board = ({ knightPosition: [knightX, knightY], }) => {
    function renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (React.createElement("div", { key: i, style: squareStyle },
            React.createElement(BoardSquare, { x: x, y: y },
                React.createElement(Piece, { isKnight: x === knightX && y === knightY }))));
    }
    const squares = [];
    for (let i = 0; i < 64; i += 1) {
        squares.push(renderSquare(i));
    }
    return React.createElement("div", { style: boardStyle }, squares);
};
export default Board;
