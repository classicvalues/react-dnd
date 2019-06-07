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
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    float: 'left',
};
var Box = function (_a) {
    var name = _a.name, isDragging = _a.isDragging, connectDragSource = _a.connectDragSource;
    var opacity = isDragging ? 0.4 : 1;
    return connectDragSource(react_1.default.createElement("div", { style: __assign({}, style, { opacity: opacity }) }, name));
};
exports.default = react_dnd_1.DragSource(ItemTypes_1.default.BOX, {
    beginDrag: function (props) { return ({ name: props.name }); },
    endDrag: function (props, monitor) {
        var item = monitor.getItem();
        var dropResult = monitor.getDropResult();
        if (dropResult) {
            var alertMessage = '';
            var isDropAllowed = dropResult.allowedDropEffect === 'any' ||
                dropResult.allowedDropEffect === dropResult.dropEffect;
            if (isDropAllowed) {
                var isCopyAction = dropResult.dropEffect === 'copy';
                var actionName = isCopyAction ? 'copied' : 'moved';
                alertMessage = "You " + actionName + " " + item.name + " into " + dropResult.name + "!";
            }
            else {
                alertMessage = "You cannot " + dropResult.dropEffect + " an item into the " + dropResult.name;
            }
            alert(alertMessage);
        }
    },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(Box);
