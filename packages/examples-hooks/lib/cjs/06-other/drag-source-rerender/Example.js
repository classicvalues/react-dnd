"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var useDrag = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrag;
var Parent = function () {
    var _a = useDrag({
        item: { type: 'KNIGHT' },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _a[0].isDragging, drag = _a[1];
    return react_1.default.createElement(Child, { drag: drag }, isDragging ? 'Dragging' : 'Drag me');
};
exports.default = Parent;
var Child = function (_a) {
    var drag = _a.drag, children = _a.children;
    var _b = react_1.default.useState(true), open = _b[0], setOpen = _b[1];
    var toggle = react_1.default.useCallback(function () { return setOpen(!open); }, [open]);
    return (react_1.default.createElement("div", { style: {
            padding: 16,
            width: 400,
        } },
        react_1.default.createElement("button", { onClick: toggle }, open ? 'Hide' : 'Show'),
        open ? (react_1.default.createElement("div", { ref: drag, style: {
                padding: 32,
                marginTop: 16,
                background: '#eee',
            } }, children)) : null));
};
