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
// tslint:disable max-classes-per-file jsx-no-lambda
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var Colors_1 = __importDefault(require("./Colors"));
var style = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
};
var SourceBoxRaw = function (_a) {
    var color = _a.color, children = _a.children, isDragging = _a.isDragging, connectDragSource = _a.connectDragSource, forbidDrag = _a.forbidDrag, onToggleForbidDrag = _a.onToggleForbidDrag;
    var opacity = isDragging ? 0.4 : 1;
    var backgroundColor;
    switch (color) {
        case Colors_1.default.YELLOW:
            backgroundColor = 'lightgoldenrodyellow';
            break;
        case Colors_1.default.BLUE:
            backgroundColor = 'lightblue';
            break;
        default:
            break;
    }
    return connectDragSource(react_1.default.createElement("div", { style: __assign({}, style, { backgroundColor: backgroundColor,
            opacity: opacity, cursor: forbidDrag ? 'default' : 'move' }) },
        react_1.default.createElement("input", { type: "checkbox", checked: forbidDrag, onChange: onToggleForbidDrag }),
        react_1.default.createElement("small", null, "Forbid drag"),
        children));
};
var SourceBox = react_dnd_1.DragSource(function (props) { return props.color + ''; }, {
    canDrag: function (props) { return !props.forbidDrag; },
    beginDrag: function () { return ({}); },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(SourceBoxRaw);
var StatefulSourceBox = function (props) {
    var _a = react_1.useState(false), forbidDrag = _a[0], setForbidDrag = _a[1];
    var handleToggleForbidDrag = react_1.useCallback(function () {
        setForbidDrag(!forbidDrag);
    }, [forbidDrag]);
    return (react_1.default.createElement(SourceBox, __assign({}, props, { forbidDrag: forbidDrag, onToggleForbidDrag: function () { return handleToggleForbidDrag(); } })));
};
exports.default = StatefulSourceBox;
