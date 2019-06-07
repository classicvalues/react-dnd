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
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
exports.BoardSquare = function (_a) {
    var x = _a.x, y = _a.y, children = _a.children;
    var _b = useDrop({
        accept: ItemTypes_1.default.KNIGHT,
        canDrop: function () { return Game_1.canMoveKnight(x, y); },
        drop: function () { return Game_1.moveKnight(x, y); },
        collect: function (mon) { return ({
            isOver: !!mon.isOver(),
            canDrop: !!mon.canDrop(),
        }); },
    }), _c = _b[0], isOver = _c.isOver, canDrop = _c.canDrop, drop = _b[1];
    var black = (x + y) % 2 === 1;
    return (react_1.default.createElement("div", { ref: drop, style: {
            position: 'relative',
            width: '100%',
            height: '100%',
        } },
        react_1.default.createElement(Square_1.Square, { black: black }, children),
        isOver && !canDrop && react_1.default.createElement(Overlay_1.default, { color: "red" }),
        !isOver && canDrop && react_1.default.createElement(Overlay_1.default, { color: "yellow" }),
        isOver && canDrop && react_1.default.createElement(Overlay_1.default, { color: "green" })));
};
