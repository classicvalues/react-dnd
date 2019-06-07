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
var CustomDragLayer_1 = __importDefault(require("./CustomDragLayer"));
var DragAroundCustomDragLayer = function () {
    var _a = react_1.useState(false), snapToGridAfterDrop = _a[0], setSnapToGridAfterDrop = _a[1];
    var _b = react_1.useState(false), snapToGridWhileDragging = _b[0], setSnapToGridWhileDragging = _b[1];
    var handleSnapToGridAfterDropChange = react_1.default.useCallback(function () {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);
    var handleSnapToGridWhileDraggingChange = react_1.default.useCallback(function () {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "EXPERIMENTAL API"),
        react_1.default.createElement(Container_1.default, { snapToGrid: snapToGridAfterDrop }),
        react_1.default.createElement(CustomDragLayer_1.default, { snapToGrid: snapToGridWhileDragging }),
        react_1.default.createElement("p", null,
            react_1.default.createElement("label", { htmlFor: "snapToGridWhileDragging" },
                react_1.default.createElement("input", { id: "snapToGridWhileDragging", type: "checkbox", checked: snapToGridWhileDragging, onChange: handleSnapToGridWhileDraggingChange }),
                react_1.default.createElement("small", null, "Snap to grid while dragging")),
            react_1.default.createElement("br", null),
            react_1.default.createElement("label", { htmlFor: "snapToGridAfterDrop" },
                react_1.default.createElement("input", { id: "snapToGridAfterDrop", type: "checkbox", checked: snapToGridAfterDrop, onChange: handleSnapToGridAfterDropChange }),
                react_1.default.createElement("small", null, "Snap to grid after drop")))));
};
exports.default = DragAroundCustomDragLayer;
