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
// tslint:disable max-classes-per-file jsx-no-lambda
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var Colors_1 = __importDefault(require("./Colors"));
var useDrag = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrag;
var style = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
};
var SourceBox = function (_a) {
    var color = _a.color, children = _a.children;
    var _b = react_1.useState(false), forbidDrag = _b[0], setForbidDrag = _b[1];
    var _c = useDrag({
        item: { type: "" + color },
        canDrag: !forbidDrag,
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _c[0].isDragging, drag = _c[1];
    var onToggleForbidDrag = react_1.useCallback(function () {
        setForbidDrag(!forbidDrag);
    }, [forbidDrag]);
    var backgroundColor = react_1.useMemo(function () {
        switch (color) {
            case Colors_1.default.YELLOW:
                return 'lightgoldenrodyellow';
            case Colors_1.default.BLUE:
                return 'lightblue';
            default:
                return 'lightgoldenrodyellow';
        }
    }, [color]);
    var containerStyle = react_1.useMemo(function () { return (__assign({}, style, { backgroundColor: backgroundColor, opacity: isDragging ? 0.4 : 1, cursor: forbidDrag ? 'default' : 'move' })); }, [isDragging, forbidDrag, backgroundColor]);
    return (react_1.default.createElement("div", { ref: drag, style: containerStyle },
        react_1.default.createElement("input", { type: "checkbox", checked: forbidDrag, onChange: onToggleForbidDrag }),
        react_1.default.createElement("small", null, "Forbid drag"),
        children));
};
exports.default = SourceBox;
