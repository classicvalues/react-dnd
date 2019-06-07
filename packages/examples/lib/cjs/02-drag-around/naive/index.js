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
var Container_1 = __importDefault(require("./Container"));
var DragAroundNaive = function () {
    var _a = react_1.useState(true), hideSourceOnDrag = _a[0], setHideSourceOnDrag = _a[1];
    var handleHideSourceClick = react_1.useCallback(function () {
        setHideSourceOnDrag(!hideSourceOnDrag);
    }, [hideSourceOnDrag]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Container_1.default, { hideSourceOnDrag: hideSourceOnDrag }),
        react_1.default.createElement("p", null,
            react_1.default.createElement("label", { htmlFor: "hideSourceOnDrag" },
                react_1.default.createElement("input", { id: "hideSourceOnDrag", type: "checkbox", checked: hideSourceOnDrag, onChange: handleHideSourceClick }),
                react_1.default.createElement("small", null, "Hide the source item while dragging")))));
};
exports.default = DragAroundNaive;
