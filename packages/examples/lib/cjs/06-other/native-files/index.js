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
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var TargetBox_1 = __importDefault(require("./TargetBox"));
var FileList_1 = __importDefault(require("./FileList"));
var FILE = react_dnd_html5_backend_1.NativeTypes.FILE;
var Container = function () {
    var _a = react_1.useState([]), droppedFiles = _a[0], setDroppedFiles = _a[1];
    var accepts = react_1.useMemo(function () { return [FILE]; }, []);
    var handleFileDrop = function (item, monitor) {
        if (monitor) {
            setDroppedFiles(monitor.getItem().files);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TargetBox_1.default, { accepts: accepts, onDrop: handleFileDrop }),
        react_1.default.createElement(FileList_1.default, { files: droppedFiles })));
};
exports.default = Container;
