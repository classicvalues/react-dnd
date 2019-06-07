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
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    cursor: 'move',
};
var Box = function (_a) {
    var id = _a.id, left = _a.left, top = _a.top, hideSourceOnDrag = _a.hideSourceOnDrag, children = _a.children;
    var _b = useDrag({
        item: { id: id, left: left, top: top, type: ItemTypes_1.default.BOX },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _b[0].isDragging, drag = _b[1];
    if (isDragging && hideSourceOnDrag) {
        return react_1.default.createElement("div", { ref: drag });
    }
    return (react_1.default.createElement("div", { ref: drag, style: __assign({}, style, { left: left, top: top }) }, children));
};
exports.default = Box;
