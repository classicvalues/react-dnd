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
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};
var Card = react_1.default.forwardRef(function (_a, ref) {
    var text = _a.text, isDragging = _a.isDragging, connectDragSource = _a.connectDragSource, connectDropTarget = _a.connectDropTarget;
    var elementRef = react_1.useRef(null);
    connectDragSource(elementRef);
    connectDropTarget(elementRef);
    var opacity = isDragging ? 0 : 1;
    react_1.useImperativeHandle(ref, function () { return ({
        getNode: function () { return elementRef.current; },
    }); });
    return (react_1.default.createElement("div", { ref: elementRef, style: __assign({}, style, { opacity: opacity }) }, text));
});
exports.default = react_dnd_1.DropTarget(ItemTypes_1.default.CARD, {
    hover: function (props, monitor, component) {
        if (!component) {
            return null;
        }
        // node = HTML Div element from imperative API
        var node = component.getNode();
        if (!node) {
            return null;
        }
        var dragIndex = monitor.getItem().index;
        var hoverIndex = props.index;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }
        // Determine rectangle on screen
        var hoverBoundingRect = node.getBoundingClientRect();
        // Get vertical middle
        var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // Determine mouse position
        var clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        var hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }
        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
}, function (connect) { return ({
    connectDropTarget: connect.dropTarget(),
}); })(react_dnd_1.DragSource(ItemTypes_1.default.CARD, {
    beginDrag: function (props) { return ({
        id: props.id,
        index: props.index,
    }); },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(Card));
