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
var react_dnd_1 = require("react-dnd");
var style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
exports.Dustbin = function (_a) {
    var accepts = _a.accepts, isOver = _a.isOver, canDrop = _a.canDrop, connectDropTarget = _a.connectDropTarget, lastDroppedItem = _a.lastDroppedItem;
    var isActive = isOver && canDrop;
    var backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    return connectDropTarget(react_1.default.createElement("div", { style: __assign({}, style, { backgroundColor: backgroundColor }) },
        isActive
            ? 'Release to drop'
            : "This dustbin accepts: " + accepts.join(', '),
        lastDroppedItem && (react_1.default.createElement("p", null,
            "Last dropped: ",
            JSON.stringify(lastDroppedItem)))));
};
exports.default = react_dnd_1.DropTarget(function (props) { return props.accepts; }, {
    drop: function (props, monitor) {
        props.onDrop(monitor.getItem());
    },
}, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}); })(exports.Dustbin);
