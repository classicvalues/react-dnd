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
var styles = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
};
var Box = function (_a) {
    var title = _a.title, yellow = _a.yellow;
    var backgroundColor = yellow ? 'yellow' : 'white';
    return react_1.default.createElement("div", { style: __assign({}, styles, { backgroundColor: backgroundColor }) }, title);
};
exports.default = Box;
