"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
var style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
var TargetBox = function () {
    var _a = useDrop({
        accept: ItemTypes_1.default.BOX,
        collect: function (monitor) { return ({
            isActive: monitor.canDrop() && monitor.isOver(),
        }); },
    }), isActive = _a[0].isActive, drop = _a[1];
    return (react_1.default.createElement("div", { ref: drop, style: style }, isActive ? 'Release to drop' : 'Drag item here'));
};
exports.default = TargetBox;
