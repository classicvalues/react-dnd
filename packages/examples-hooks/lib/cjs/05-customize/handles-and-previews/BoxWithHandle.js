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
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var useDrag = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrag;
var style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    width: '20rem',
};
var handleStyle = {
    backgroundColor: 'green',
    width: '1rem',
    height: '1rem',
    display: 'inline-block',
    marginRight: '0.75rem',
    cursor: 'move',
};
var BoxWithHandle = function () {
    var _a = useDrag({
        item: { type: ItemTypes_1.default.BOX },
        collect: function (monitor) { return ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }); },
    }), opacity = _a[0].opacity, drag = _a[1], preview = _a[2];
    return (react_1.default.createElement("div", { ref: preview, style: __assign({}, style, { opacity: opacity }) },
        react_1.default.createElement("div", { ref: drag, style: handleStyle }),
        "Drag me by the handle"));
};
exports.default = BoxWithHandle;
