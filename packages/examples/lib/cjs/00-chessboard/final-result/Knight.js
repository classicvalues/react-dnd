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
var knightImage_1 = __importDefault(require("./knightImage"));
var knightStyle = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
};
var Knight = function (_a) {
    var connectDragSource = _a.connectDragSource, connectDragPreview = _a.connectDragPreview, isDragging = _a.isDragging;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_dnd_1.DragPreviewImage, { connect: connectDragPreview, src: knightImage_1.default }),
        react_1.default.createElement("div", { ref: connectDragSource, style: __assign({}, knightStyle, { opacity: isDragging ? 0.5 : 1 }) }, "\u2658")));
};
exports.default = react_dnd_1.DragSource(ItemTypes_1.default.KNIGHT, {
    beginDrag: function () { return ({}); },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}); })(Knight);
