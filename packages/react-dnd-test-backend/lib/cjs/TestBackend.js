"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function noop() {
    // noop
}
var TestBackendImpl = /** @class */ (function () {
    function TestBackendImpl(manager) {
        this.didCallSetup = false;
        this.didCallTeardown = false;
        this.actions = manager.getActions();
    }
    TestBackendImpl.prototype.setup = function () {
        this.didCallSetup = true;
    };
    TestBackendImpl.prototype.teardown = function () {
        this.didCallTeardown = true;
    };
    TestBackendImpl.prototype.connectDragSource = function () {
        return noop;
    };
    TestBackendImpl.prototype.connectDragPreview = function () {
        return noop;
    };
    TestBackendImpl.prototype.connectDropTarget = function () {
        return noop;
    };
    TestBackendImpl.prototype.simulateBeginDrag = function (sourceIds, options) {
        this.actions.beginDrag(sourceIds, options);
    };
    TestBackendImpl.prototype.simulatePublishDragSource = function () {
        this.actions.publishDragSource();
    };
    TestBackendImpl.prototype.simulateHover = function (targetIds, options) {
        this.actions.hover(targetIds, options);
    };
    TestBackendImpl.prototype.simulateDrop = function () {
        this.actions.drop();
    };
    TestBackendImpl.prototype.simulateEndDrag = function () {
        this.actions.endDrag();
    };
    return TestBackendImpl;
}());
exports.default = TestBackendImpl;
