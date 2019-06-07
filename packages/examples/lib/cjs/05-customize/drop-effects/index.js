"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SourceBox_1 = __importDefault(require("./SourceBox"));
var TargetBox_1 = __importDefault(require("./TargetBox"));
var Container = function () { return (react_1.default.createElement("div", { style: { overflow: 'hidden', clear: 'both', marginTop: '1.5rem' } },
    react_1.default.createElement("div", { style: { float: 'left' } },
        react_1.default.createElement(SourceBox_1.default, { showCopyIcon: true }),
        react_1.default.createElement(SourceBox_1.default, null)),
    react_1.default.createElement("div", { style: { float: 'left' } },
        react_1.default.createElement(TargetBox_1.default, null)))); };
exports.default = Container;
