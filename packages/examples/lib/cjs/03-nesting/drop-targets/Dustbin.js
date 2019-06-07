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
function getStyle(backgroundColor) {
    return {
        border: '1px solid rgba(0,0,0,0.2)',
        minHeight: '8rem',
        minWidth: '8rem',
        color: 'white',
        backgroundColor: backgroundColor,
        padding: '2rem',
        paddingTop: '1rem',
        margin: '1rem',
        textAlign: 'center',
        float: 'left',
        fontSize: '1rem',
    };
}
var Dustbin = react_1.default.forwardRef(function (_a, ref) {
    var greedy = _a.greedy, isOver = _a.isOver, isOverCurrent = _a.isOverCurrent, connectDropTarget = _a.connectDropTarget, children = _a.children;
    var _b = react_1.useState(false), hasDropped = _b[0], setHasDropped = _b[1];
    var _c = react_1.useState(false), hasDroppedOnChild = _c[0], setHasDroppedOnChild = _c[1];
    react_1.useImperativeHandle(ref, function () { return ({
        onDrop: function (onChild) {
            setHasDroppedOnChild(onChild);
            setHasDropped(true);
        },
    }); }, []);
    var text = greedy ? 'greedy' : 'not greedy';
    var backgroundColor = 'rgba(0, 0, 0, .5)';
    if (isOverCurrent || (isOver && greedy)) {
        backgroundColor = 'darkgreen';
    }
    return connectDropTarget(react_1.default.createElement("div", { style: getStyle(backgroundColor) },
        text,
        react_1.default.createElement("br", null),
        hasDropped && react_1.default.createElement("span", null,
            "dropped ",
            hasDroppedOnChild && ' on child'),
        react_1.default.createElement("div", null, children)));
});
exports.default = react_dnd_1.DropTarget(ItemTypes_1.default.BOX, {
    drop: function (props, monitor, component) {
        if (!component) {
            return;
        }
        var hasDroppedOnChild = monitor.didDrop();
        if (hasDroppedOnChild && !props.greedy) {
            return;
        }
        ;
        component.onDrop(hasDroppedOnChild);
    },
}, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
}); })(Dustbin);
