"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var squareStyle = {
    width: '100%',
    height: '100%',
};
exports.Square = function (_a) {
    var black = _a.black, children = _a.children;
    var backgroundColor = black ? 'black' : 'white';
    var color = black ? 'white' : 'black';
    return (react_1.default.createElement("div", { style: __assign({}, squareStyle, { color: color,
            backgroundColor: backgroundColor }) }, children));
};
