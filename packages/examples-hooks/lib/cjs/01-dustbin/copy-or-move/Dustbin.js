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
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
var style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
function selectBackgroundColor(isActive, canDrop) {
    if (isActive) {
        return 'darkgreen';
    }
    else if (canDrop) {
        return 'darkkhaki';
    }
    else {
        return '#222';
    }
}
var Dustbin = function (_a) {
    var allowedDropEffect = _a.allowedDropEffect;
    var _b = useDrop({
        accept: ItemTypes_1.default.BOX,
        drop: function () { return ({
            name: allowedDropEffect + " Dustbin",
            allowedDropEffect: allowedDropEffect,
        }); },
        collect: function (monitor) { return ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }); },
    }), _c = _b[0], canDrop = _c.canDrop, isOver = _c.isOver, drop = _b[1];
    var isActive = canDrop && isOver;
    var backgroundColor = selectBackgroundColor(isActive, canDrop);
    return (react_1.default.createElement("div", { ref: drop, style: __assign({}, style, { backgroundColor: backgroundColor }) }, "Works with " + allowedDropEffect + " drop effect",
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        isActive ? 'Release to drop' : 'Drag a box here'));
};
exports.default = Dustbin;
