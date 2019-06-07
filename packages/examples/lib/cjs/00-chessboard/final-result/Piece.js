"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Knight_1 = __importDefault(require("./Knight"));
exports.Piece = function (_a) {
    var isKnight = _a.isKnight;
    return isKnight ? react_1.default.createElement(Knight_1.default, null) : null;
};
