"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BoxWithImage_1 = __importDefault(require("./BoxWithImage"));
var BoxWithHandle_1 = __importDefault(require("./BoxWithHandle"));
var Container = function () { return (react_1.default.createElement("div", null,
    react_1.default.createElement("div", { style: { marginTop: '1.5rem' } },
        react_1.default.createElement(BoxWithHandle_1.default, null),
        react_1.default.createElement(BoxWithImage_1.default, null)))); };
exports.default = Container;
