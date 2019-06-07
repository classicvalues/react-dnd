"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Example_1 = __importDefault(require("./Example"));
var Container = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", null, "Drag the box before hiding then hide it and show it again and try again."),
        react_1.default.createElement("h5", null, "Note: this is more of a test-case then a usage demo. It will go away in the future."),
        react_1.default.createElement(Example_1.default, null)));
};
exports.default = Container;
