"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = __importDefault(require("react-dnd-html5-backend"));
var Dustbin_1 = __importDefault(require("./Dustbin"));
var Box_1 = __importDefault(require("./Box"));
var _a = require('react-frame-component'), Frame = _a.default, FrameContextConsumer = _a.FrameContextConsumer;
var FrameBindingContext = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(FrameContextConsumer, null, function (_a) {
        var window = _a.window;
        return (react_1.default.createElement(react_dnd_1.DragDropContextProvider, { backend: react_dnd_html5_backend_1.default, context: window }, children));
    }));
};
// Don't use the decorator, embed the DnD context within the iframe
// tslint:disable-next-line max-classes-per-file
function Container() {
    // The react-frame-component will pass the iframe's 'window' global as a context value
    // to the DragDropContext provider. You could also directly inject it in via a prop.
    // If neither the prop or the context value for 'window' are present, the DragDropContextProvider
    // will just use the global window.
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "EXPERIMENTAL API"),
        react_1.default.createElement(Frame, { style: { width: '100%', height: 400 } },
            react_1.default.createElement(FrameBindingContext, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { style: { overflow: 'hidden', clear: 'both' } },
                        react_1.default.createElement(Dustbin_1.default, null)),
                    react_1.default.createElement("div", { style: { overflow: 'hidden', clear: 'both' } },
                        react_1.default.createElement(Box_1.default, { name: "Glass" }),
                        react_1.default.createElement(Box_1.default, { name: "Banana" }),
                        react_1.default.createElement(Box_1.default, { name: "Paper" })))))));
}
exports.default = Container;
