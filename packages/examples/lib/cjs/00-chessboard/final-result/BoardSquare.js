"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var Square_1 = require("./Square");
var Game_1 = require("./Game");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var Overlay_1 = __importDefault(require("./Overlay"));
var boardSquareStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
};
var BoardSquare = function (_a) {
    var x = _a.x, y = _a.y, connectDropTarget = _a.connectDropTarget, isOver = _a.isOver, canDrop = _a.canDrop, children = _a.children;
    var black = (x + y) % 2 === 1;
    return connectDropTarget(react_1.default.createElement("div", { style: boardSquareStyle },
        react_1.default.createElement(Square_1.Square, { black: black }, children),
        isOver && !canDrop && react_1.default.createElement(Overlay_1.default, { color: "red" }),
        !isOver && canDrop && react_1.default.createElement(Overlay_1.default, { color: "yellow" }),
        isOver && canDrop && react_1.default.createElement(Overlay_1.default, { color: "green" })));
};
exports.default = react_dnd_1.DropTarget(ItemTypes_1.default.KNIGHT, {
    canDrop: function (props) { return Game_1.canMoveKnight(props.x, props.y); },
    drop: function (props) { return Game_1.moveKnight(props.x, props.y); },
}, function (connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
    };
})(BoardSquare);
