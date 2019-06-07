"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
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
var Dustbin = function (_a) {
    var greedy = _a.greedy, children = _a.children;
    var _b = react_1.default.useState(false), hasDropped = _b[0], setHasDropped = _b[1];
    var _c = react_1.default.useState(false), hasDroppedOnChild = _c[0], setHasDroppedOnChild = _c[1];
    var _d = useDrop({
        accept: ItemTypes_1.default.BOX,
        drop: function (item, monitor) {
            var didDrop = monitor.didDrop();
            if (didDrop && !greedy) {
                return;
            }
            setHasDropped(true);
            setHasDroppedOnChild(didDrop);
        },
        collect: function (monitor) { return ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }); },
    }), _e = _d[0], isOver = _e.isOver, isOverCurrent = _e.isOverCurrent, drop = _d[1];
    var text = greedy ? 'greedy' : 'not greedy';
    var backgroundColor = 'rgba(0, 0, 0, .5)';
    if (isOverCurrent || (isOver && greedy)) {
        backgroundColor = 'darkgreen';
    }
    return (react_1.default.createElement("div", { ref: drop, style: getStyle(backgroundColor) },
        text,
        react_1.default.createElement("br", null),
        hasDropped && react_1.default.createElement("span", null,
            "dropped ",
            hasDroppedOnChild && ' on child'),
        react_1.default.createElement("div", null, children)));
};
exports.default = Dustbin;
