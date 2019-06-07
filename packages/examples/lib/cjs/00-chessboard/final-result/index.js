"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Board_1 = __importDefault(require("./Board"));
var Game_1 = require("./Game");
var containerStyle = {
    width: 500,
    height: 500,
    border: '1px solid gray',
};
/**
 * The Chessboard Tutorial Application
 */
var ChessboardTutorialApp = function () {
    var _a = react_1.useState([1, 7]), knightPos = _a[0], setKnightPos = _a[1];
    // the observe function will return an unsubscribe callback
    react_1.useEffect(function () { return Game_1.observe(function (newPos) { return setKnightPos(newPos); }); });
    return (react_1.default.createElement("div", { style: containerStyle },
        react_1.default.createElement(Board_1.default, { knightPosition: knightPos })));
};
exports.default = ChessboardTutorialApp;
