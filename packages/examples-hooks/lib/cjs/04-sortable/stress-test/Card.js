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
var useDrag = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrag, useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
var style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};
var Card = function (_a) {
    var id = _a.id, text = _a.text, moveCard = _a.moveCard;
    var ref = react_1.default.useRef(null);
    var _b = useDrag({
        item: { id: id, type: ItemTypes_1.default.CARD },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _b[0].isDragging, connectDrag = _b[1];
    var _c = useDrop({
        accept: ItemTypes_1.default.CARD,
        hover: function (_a) {
            var draggedId = _a.id;
            if (draggedId !== id) {
                moveCard(draggedId, id);
            }
        },
    }), connectDrop = _c[1];
    connectDrag(ref);
    connectDrop(ref);
    var opacity = isDragging ? 0 : 1;
    var containerStyle = react_1.default.useMemo(function () { return (__assign({}, style, { opacity: opacity })); }, [opacity]);
    return (react_1.default.createElement("div", { ref: ref, style: containerStyle }, text));
};
exports.default = Card;
