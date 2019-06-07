"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var Parent = function (_a) {
    var isDragging = _a.isDragging, connectDragSource = _a.connectDragSource;
    return (react_1.default.createElement(Child, { connect: connectDragSource }, isDragging ? 'Dragging' : 'Drag me'));
};
var Example = react_dnd_1.DragSource('KNIGHT', {
    beginDrag: function () { return ({}); },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(Parent);
exports.default = Example;
var Child = function (_a) {
    var connect = _a.connect, children = _a.children;
    var _b = react_1.default.useState(true), open = _b[0], setOpen = _b[1];
    var toggle = react_1.default.useCallback(function () { return setOpen(!open); }, [open]);
    return (react_1.default.createElement("div", { style: {
            padding: 16,
            width: 400,
        } },
        react_1.default.createElement("button", { onClick: toggle }, open ? 'Hide' : 'Show'),
        open ? (react_1.default.createElement("div", { ref: function (node) { return connect(node); }, style: {
                padding: 32,
                marginTop: 16,
                background: '#eee',
            } }, children)) : null));
};
