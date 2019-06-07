"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
var TargetBox = function (_a) {
    var canDrop = _a.canDrop, isOver = _a.isOver, connectDropTarget = _a.connectDropTarget;
    var isActive = canDrop && isOver;
    return connectDropTarget(react_1.default.createElement("div", { style: style }, isActive ? 'Release to drop' : 'Drag file here'));
};
exports.default = react_dnd_1.DropTarget(function (props) { return props.accepts; }, {
    drop: function (props, monitor) {
        if (props.onDrop) {
            props.onDrop(props, monitor);
        }
    },
}, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}); })(TargetBox);
