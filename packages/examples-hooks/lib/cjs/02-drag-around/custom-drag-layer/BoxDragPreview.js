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
var Box_1 = __importDefault(require("./Box"));
var styles = {
    display: 'inline-block',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)',
};
var BoxDragPreview = react_1.memo(function (_a) {
    var title = _a.title;
    var _b = react_1.useState(false), tickTock = _b[0], setTickTock = _b[1];
    react_1.useEffect(function subscribeToIntervalTick() {
        var interval = setInterval(function () { return setTickTock(!tickTock); }, 500);
        return function () { return clearInterval(interval); };
    }, [tickTock]);
    return (react_1.default.createElement("div", { style: styles },
        react_1.default.createElement(Box_1.default, { title: title, yellow: tickTock })));
});
exports.default = BoxDragPreview;
