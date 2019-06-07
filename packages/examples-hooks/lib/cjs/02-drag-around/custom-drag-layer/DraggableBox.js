"use strict";
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
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var Box_1 = __importDefault(require("./Box"));
var useDrag = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrag;
function getStyles(left, top, isDragging) {
    var transform = "translate3d(" + left + "px, " + top + "px, 0)";
    return {
        position: 'absolute',
        transform: transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
    };
}
var DraggableBox = function (props) {
    var id = props.id, title = props.title, left = props.left, top = props.top;
    var _a = useDrag({
        item: { type: ItemTypes_1.default.BOX, id: id, left: left, top: top },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _a[0].isDragging, drag = _a[1], preview = _a[2];
    react_1.useEffect(function () {
        preview(react_dnd_html5_backend_1.getEmptyImage(), { captureDraggingState: true });
    }, []);
    return (react_1.default.createElement("div", { ref: drag, style: getStyles(left, top, isDragging) },
        react_1.default.createElement(Box_1.default, { title: title })));
};
exports.default = DraggableBox;
