"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function list(files) {
    var label = function (file) {
        return "'" + file.name + "' of size '" + file.size + "' and type '" + file.type + "'";
    };
    return files.map(function (file) { return react_1.default.createElement("li", { key: file.name }, label(file)); });
}
var FileList = function (_a) {
    var files = _a.files;
    if (files.length === 0) {
        return react_1.default.createElement("div", null, "Nothing to display");
    }
    return react_1.default.createElement("div", null, list(files));
};
exports.default = FileList;
