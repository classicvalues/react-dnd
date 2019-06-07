"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var BoxDragPreview_1 = __importDefault(require("./BoxDragPreview"));
var snapToGrid_1 = __importDefault(require("./snapToGrid"));
var useDragLayer = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDragLayer;
var layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
};
function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {
    var _a;
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    var x = currentOffset.x, y = currentOffset.y;
    if (isSnapToGrid) {
        x -= initialOffset.x;
        y -= initialOffset.y;
        _a = snapToGrid_1.default(x, y), x = _a[0], y = _a[1];
        x += initialOffset.x;
        y += initialOffset.y;
    }
    var transform = "translate(" + x + "px, " + y + "px)";
    return {
        transform: transform,
        WebkitTransform: transform,
    };
}
var CustomDragLayer = function (props) {
    var _a = useDragLayer(function (monitor) { return ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }); }), itemType = _a.itemType, isDragging = _a.isDragging, item = _a.item, initialOffset = _a.initialOffset, currentOffset = _a.currentOffset;
    function renderItem() {
        switch (itemType) {
            case ItemTypes_1.default.BOX:
                return react_1.default.createElement(BoxDragPreview_1.default, { title: item.title });
            default:
                return null;
        }
    }
    if (!isDragging) {
        return null;
    }
    return (react_1.default.createElement("div", { style: layerStyles },
        react_1.default.createElement("div", { style: getItemStyles(initialOffset, currentOffset, props.snapToGrid) }, renderItem())));
};
exports.default = CustomDragLayer;
