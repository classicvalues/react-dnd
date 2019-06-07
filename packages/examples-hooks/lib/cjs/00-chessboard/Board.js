"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BoardSquare_1 = require("./BoardSquare");
var Knight_1 = require("./Knight");
/** Styling properties applied to the board element */
var boardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
};
/** Styling properties applied to each square element */
var squareStyle = { width: '12.5%', height: '12.5%' };
/**
 * The chessboard component
 * @param props The react props
 */
var Board = function (_a) {
    var _b = _a.knightPosition, knightX = _b[0], knightY = _b[1];
    function renderSquare(i) {
        var x = i % 8;
        var y = Math.floor(i / 8);
        return (react_1.default.createElement("div", { key: i, style: squareStyle },
            react_1.default.createElement(BoardSquare_1.BoardSquare, { x: x, y: y }, renderPiece(x, y))));
    }
    function renderPiece(x, y) {
        var isKnightHere = x === knightX && y === knightY;
        return isKnightHere ? react_1.default.createElement(Knight_1.Knight, null) : null;
    }
    var squares = [];
    for (var i = 0; i < 64; i += 1) {
        squares.push(renderSquare(i));
    }
    return react_1.default.createElement("div", { style: boardStyle }, squares);
};
exports.default = Board;
