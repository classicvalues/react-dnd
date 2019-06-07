"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dnd_test_backend_1 = require("react-dnd-test-backend");
var react_dnd_1 = require("react-dnd");
var test_utils_1 = require("react-dom/test-utils");
/**
 * Wrap a DnD component or test case in a DragDropContext
 *
 * @param DecoratedComponent The component to decorate
 */
function wrapInTestContext(DecoratedComponent) {
    var TestStub = function (props) { return React.createElement(DecoratedComponent, __assign({}, props)); };
    return react_dnd_1.DragDropContext(react_dnd_test_backend_1.default)(TestStub);
}
exports.wrapInTestContext = wrapInTestContext;
/**
 * Extracts a Backend instance from a TestContext component, such as
 * one emitted from `wrapinTestContext`
 *
 * @param instance The instance to extract the backend fram
 */
function getBackendFromInstance(instance) {
    // Obtain a reference to the backend
    return instance.getManager().getBackend();
}
exports.getBackendFromInstance = getBackendFromInstance;
function simulateDragDropSequence(source, target, backend) {
    test_utils_1.act(function () {
        backend.simulateBeginDrag([source.getHandlerId()]);
        backend.simulateHover([target.getHandlerId()]);
        backend.simulateDrop();
        backend.simulateEndDrag();
    });
}
exports.simulateDragDropSequence = simulateDragDropSequence;
function simulateHoverSequence(source, target, backend) {
    test_utils_1.act(function () {
        backend.simulateBeginDrag([source.getHandlerId()]);
        backend.simulateHover([target.getHandlerId()]);
        backend.simulateEndDrag();
    });
}
exports.simulateHoverSequence = simulateHoverSequence;
