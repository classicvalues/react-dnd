"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Dustbin_1 = __importDefault(require("./Dustbin"));
var Box_1 = __importDefault(require("./Box"));
var rowStyle = { overflow: 'hidden', clear: 'both' };
var Container = function () { return (react_1.default.createElement("div", null,
    react_1.default.createElement("div", { style: rowStyle },
        react_1.default.createElement(Dustbin_1.default, { allowedDropEffect: "any" }),
        react_1.default.createElement(Dustbin_1.default, { allowedDropEffect: "copy" }),
        react_1.default.createElement(Dustbin_1.default, { allowedDropEffect: "move" })),
    react_1.default.createElement("div", { style: rowStyle },
        react_1.default.createElement(Box_1.default, { name: "Glass" }),
        react_1.default.createElement(Box_1.default, { name: "Banana" }),
        react_1.default.createElement(Box_1.default, { name: "Paper" })))); };
exports.default = Container;
