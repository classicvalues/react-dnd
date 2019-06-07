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
var SortableStressTest = function () {
    // Avoid rendering on server because the big data list is generated
    var _a = react_1.useState(false), shouldRender = _a[0], setShouldRender = _a[1];
    react_1.useEffect(function () { return setShouldRender(true); });
    return react_1.default.createElement(react_1.default.Fragment, null, shouldRender && react_1.default.createElement(Container_1.default, null));
};
exports.default = SortableStressTest;
