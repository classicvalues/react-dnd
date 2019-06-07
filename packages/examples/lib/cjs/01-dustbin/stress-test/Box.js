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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
var Box = react_1.memo(function (_a) {
    var name = _a.name, isDropped = _a.isDropped, isDragging = _a.isDragging, connectDragSource = _a.connectDragSource;
    var opacity = isDragging ? 0.4 : 1;
    return connectDragSource(react_1.default.createElement("div", { style: __assign({}, style, { opacity: opacity }) }, isDropped ? react_1.default.createElement("s", null, name) : name));
});
exports.default = react_dnd_1.DragSource(function (props) { return props.type; }, {
    beginDrag: function (props) { return ({ name: props.name }); },
    isDragging: function (props, monitor) {
        var item = monitor.getItem();
        return props.name === item.name;
    },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(Box);
