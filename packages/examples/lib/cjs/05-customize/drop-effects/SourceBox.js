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
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1rem',
    marginBottom: '1rem',
    cursor: 'move',
};
var SourceBox = function (_a) {
    var isDragging = _a.isDragging, connectDragSource = _a.connectDragSource, showCopyIcon = _a.showCopyIcon;
    var opacity = isDragging ? 0.4 : 1;
    var dropEffect = showCopyIcon ? 'copy' : 'move';
    return connectDragSource(react_1.default.createElement("div", { style: __assign({}, style, { opacity: opacity }) },
        "When I am over a drop zone, I have ",
        showCopyIcon ? 'copy' : 'no',
        " icon."), { dropEffect: dropEffect });
};
exports.default = react_dnd_1.DragSource(ItemTypes_1.default.BOX, {
    beginDrag: function () { return ({}); },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(SourceBox);
