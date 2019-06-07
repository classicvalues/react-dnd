"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Container_1 = __importDefault(require("./Container"));
function SortableStressTest() {
    // Avoid rendering on server because the big data list is generated
    var _a = react_1.default.useState(false), shouldRender = _a[0], setShouldRender = _a[1];
    // Won't fire on server.
    react_1.default.useEffect(function () { return setShouldRender(true); }, []);
    return react_1.default.createElement(react_1.default.Fragment, null, shouldRender && react_1.default.createElement(Container_1.default, null));
}
exports.default = SortableStressTest;
