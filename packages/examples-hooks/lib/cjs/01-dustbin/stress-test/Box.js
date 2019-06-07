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
var useDrag = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrag;
var style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
var Box = function (_a) {
    var name = _a.name, type = _a.type, isDropped = _a.isDropped;
    var _b = useDrag({
        item: { name: name, type: type },
        isDragging: function (monitor) {
            var item = monitor.getItem();
            return name === item.name;
        },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _b[0].isDragging, drag = _b[1];
    var opacity = isDragging ? 0.4 : 1;
    return (react_1.default.createElement("div", { ref: drag, style: __assign({}, style, { opacity: opacity }) }, isDropped ? react_1.default.createElement("s", null, name) : name));
};
exports.default = Box;
