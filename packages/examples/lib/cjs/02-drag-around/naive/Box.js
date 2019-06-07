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
var style = {
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    cursor: 'move',
};
var Box = function (_a) {
    var hideSourceOnDrag = _a.hideSourceOnDrag, left = _a.left, top = _a.top, connectDragSource = _a.connectDragSource, isDragging = _a.isDragging, children = _a.children;
    if (isDragging && hideSourceOnDrag) {
        return null;
    }
    return connectDragSource(react_1.default.createElement("div", { style: __assign({}, style, { left: left, top: top }) }, children));
};
exports.default = react_dnd_1.DragSource(ItemTypes_1.default.BOX, {
    beginDrag: function (props) {
        var id = props.id, left = props.left, top = props.top;
        return { id: id, left: left, top: top };
    },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(Box);
