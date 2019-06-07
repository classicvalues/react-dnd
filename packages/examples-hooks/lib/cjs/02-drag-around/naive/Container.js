"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var Box_1 = __importDefault(require("./Box"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
var styles = {
    width: 300,
    height: 300,
    border: '1px solid black',
    position: 'relative',
};
var Container = function (_a) {
    var hideSourceOnDrag = _a.hideSourceOnDrag;
    var _b = react_1.default.useState({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
    }), boxes = _b[0], setBoxes = _b[1];
    var _c = useDrop({
        accept: ItemTypes_1.default.BOX,
        drop: function (item, monitor) {
            var delta = monitor.getDifferenceFromInitialOffset();
            var left = Math.round(item.left + delta.x);
            var top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top);
            return undefined;
        },
    }), drop = _c[1];
    var moveBox = function (id, left, top) {
        var _a;
        setBoxes(immutability_helper_1.default(boxes, (_a = {},
            _a[id] = {
                $merge: { left: left, top: top },
            },
            _a)));
    };
    return (react_1.default.createElement("div", { ref: drop, style: styles }, Object.keys(boxes).map(function (key) {
        var _a = boxes[key], left = _a.left, top = _a.top, title = _a.title;
        return (react_1.default.createElement(Box_1.default, { key: key, id: key, left: left, top: top, hideSourceOnDrag: hideSourceOnDrag }, title));
    })));
};
exports.default = Container;
