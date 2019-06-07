"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var react_dnd_1 = require("react-dnd");
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
var style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
var TargetBox = function (props) {
    var onDrop = props.onDrop;
    var _a = useDrop({
        accept: [react_dnd_html5_backend_1.NativeTypes.FILE],
        drop: function (item, monitor) {
            if (onDrop) {
                onDrop(props, monitor);
            }
        },
        collect: function (monitor) { return ({
            isOver: monitor.isOver,
            canDrop: monitor.canDrop,
        }); },
    }), _b = _a[0], canDrop = _b.canDrop, isOver = _b.isOver, drop = _a[1];
    var isActive = canDrop && isOver;
    return (react_1.default.createElement("div", { ref: drop, style: style }, isActive ? 'Release to drop' : 'Drag file here'));
};
exports.default = TargetBox;
