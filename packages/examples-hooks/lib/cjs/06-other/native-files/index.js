"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var TargetBox_1 = __importDefault(require("./TargetBox"));
var FileList_1 = __importDefault(require("./FileList"));
var Container = function () {
    var _a = react_2.useState([]), droppedFiles = _a[0], setDroppedFiles = _a[1];
    var handleFileDrop = react_2.useCallback(function (item, monitor) {
        if (monitor) {
            var files = monitor.getItem().files;
            setDroppedFiles(files);
        }
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "EXPERIMENTAL API"),
        react_1.default.createElement(TargetBox_1.default, { onDrop: handleFileDrop }),
        react_1.default.createElement(FileList_1.default, { files: droppedFiles })));
};
exports.default = Container;
