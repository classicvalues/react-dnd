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
// tslint:disable max-classes-per-file
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var Colors_1 = __importDefault(require("./Colors"));
var style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
var TargetBoxRaw = function (_a) {
    var canDrop = _a.canDrop, isOver = _a.isOver, draggingColor = _a.draggingColor, lastDroppedColor = _a.lastDroppedColor, connectDropTarget = _a.connectDropTarget;
    var opacity = isOver ? 1 : 0.7;
    var backgroundColor = '#fff';
    switch (draggingColor) {
        case Colors_1.default.BLUE:
            backgroundColor = 'lightblue';
            break;
        case Colors_1.default.YELLOW:
            backgroundColor = 'lightgoldenrodyellow';
            break;
        default:
            break;
    }
    return connectDropTarget(react_1.default.createElement("div", { style: __assign({}, style, { backgroundColor: backgroundColor, opacity: opacity }) },
        react_1.default.createElement("p", null, "Drop here."),
        !canDrop && lastDroppedColor && react_1.default.createElement("p", null,
            "Last dropped: ",
            lastDroppedColor)));
};
var TargetBox = react_dnd_1.DropTarget([Colors_1.default.YELLOW, Colors_1.default.BLUE], {
    drop: function (props, monitor) {
        props.onDrop(monitor.getItemType());
    },
}, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    draggingColor: monitor.getItemType(),
}); })(TargetBoxRaw);
var StatefulTargetBox = function (props) {
    var _a = react_1.useState(null), lastDroppedColor = _a[0], setLastDroppedColor = _a[1];
    var handleDrop = react_1.useCallback(function (color) { return setLastDroppedColor(color); }, []);
    return (react_1.default.createElement(TargetBox, __assign({}, props, { lastDroppedColor: lastDroppedColor, onDrop: handleDrop })));
};
exports.default = StatefulTargetBox;
