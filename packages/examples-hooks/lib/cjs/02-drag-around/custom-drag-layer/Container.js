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
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var DraggableBox_1 = __importDefault(require("./DraggableBox"));
var snapToGrid_1 = __importDefault(require("./snapToGrid"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
var styles = {
    width: 300,
    height: 300,
    border: '1px solid black',
    position: 'relative',
};
function renderBox(item, key) {
    return react_1.default.createElement(DraggableBox_1.default, __assign({ key: key, id: key }, item));
}
var Container = function (_a) {
    var snapToGrid = _a.snapToGrid;
    var _b = react_1.useState({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
    }), boxes = _b[0], setBoxes = _b[1];
    var moveBox = react_1.useCallback(function (id, left, top) {
        var _a;
        setBoxes(immutability_helper_1.default(boxes, (_a = {},
            _a[id] = {
                $merge: { left: left, top: top },
            },
            _a)));
    }, [boxes]);
    var _c = useDrop({
        accept: ItemTypes_1.default.BOX,
        drop: function (item, monitor) {
            var _a;
            var delta = monitor.getDifferenceFromInitialOffset();
            var left = Math.round(item.left + delta.x);
            var top = Math.round(item.top + delta.y);
            if (snapToGrid) {
                ;
                _a = snapToGrid_1.default(left, top), left = _a[0], top = _a[1];
            }
            moveBox(item.id, left, top);
            return undefined;
        },
    }), drop = _c[1];
    return (react_1.default.createElement("div", { ref: drop, style: styles }, Object.keys(boxes).map(function (key) { return renderBox(boxes[key], key); })));
};
exports.default = Container;
