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
// tslint:disable max-classes-per-file
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var Colors_1 = __importDefault(require("./Colors"));
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
var style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
var TargetBox = function (_a) {
    var onDrop = _a.onDrop, lastDroppedColor = _a.lastDroppedColor;
    var _b = useDrop({
        accept: [Colors_1.default.YELLOW, Colors_1.default.BLUE],
        drop: function (item) {
            onDrop(item.type);
            return undefined;
        },
        collect: function (monitor) { return ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }); },
    }), _c = _b[0], isOver = _c.isOver, draggingColor = _c.draggingColor, canDrop = _c.canDrop, drop = _b[1];
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
    return (react_1.default.createElement("div", { ref: drop, style: __assign({}, style, { backgroundColor: backgroundColor, opacity: opacity }) },
        react_1.default.createElement("p", null, "Drop here."),
        !canDrop && lastDroppedColor && react_1.default.createElement("p", null,
            "Last dropped: ",
            lastDroppedColor)));
};
var StatefulTargetBox = function (props) {
    var _a = react_1.default.useState(null), lastDroppedColor = _a[0], setLastDroppedColor = _a[1];
    var handleDrop = react_1.default.useCallback(function (color) { return setLastDroppedColor(color); }, []);
    return (react_1.default.createElement(TargetBox, __assign({}, props, { lastDroppedColor: lastDroppedColor, onDrop: handleDrop })));
};
exports.default = StatefulTargetBox;
