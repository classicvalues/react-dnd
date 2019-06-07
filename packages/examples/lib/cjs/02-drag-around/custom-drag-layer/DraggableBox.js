"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var Box_1 = __importDefault(require("./Box"));
function getStyles(props) {
    var left = props.left, top = props.top, isDragging = props.isDragging;
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
var DraggableBox = /** @class */ (function (_super) {
    __extends(DraggableBox, _super);
    function DraggableBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DraggableBox.prototype.componentDidMount = function () {
        var connectDragPreview = this.props.connectDragPreview;
        if (connectDragPreview) {
            // Use empty image as a drag preview so browsers don't draw it
            // and we can draw whatever we want on the custom drag layer instead.
            connectDragPreview(react_dnd_html5_backend_1.getEmptyImage(), {
                // IE fallback: specify that we'd rather screenshot the node
                // when it already knows it's being dragged so we can hide it with CSS.
                captureDraggingState: true,
            });
        }
    };
    DraggableBox.prototype.render = function () {
        var _a = this.props, title = _a.title, connectDragSource = _a.connectDragSource;
        return connectDragSource(react_1.default.createElement("div", { style: getStyles(this.props) },
            react_1.default.createElement(Box_1.default, { title: title })));
    };
    return DraggableBox;
}(react_1.default.PureComponent));
exports.default = react_dnd_1.DragSource(ItemTypes_1.default.BOX, {
    beginDrag: function (props) {
        var id = props.id, title = props.title, left = props.left, top = props.top;
        return { id: id, title: title, left: left, top: top };
    },
}, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}); })(DraggableBox);
