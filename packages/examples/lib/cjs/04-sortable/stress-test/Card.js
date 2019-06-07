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
var Card = react_1.memo(function (_a) {
    var text = _a.text, isDragging = _a.isDragging, connectDragSource = _a.connectDragSource, connectDropTarget = _a.connectDropTarget;
    var opacity = isDragging ? 0 : 1;
    return connectDragSource(connectDropTarget(react_1.default.createElement("div", { style: __assign({}, style, { opacity: opacity }) }, text)));
});
exports.default = react_dnd_1.DropTarget(ItemTypes_1.default.CARD, {
    hover: function (props, monitor) {
        var draggedId = monitor.getItem().id;
        if (draggedId !== props.id) {
            props.moveCard(draggedId, props.id);
        }
    },
}, function (connect) { return ({
    connectDropTarget: connect.dropTarget(),
}); })(react_dnd_1.DragSource(ItemTypes_1.default.CARD, {
    beginDrag: function (props) { return ({ id: props.id }); },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(Card));
