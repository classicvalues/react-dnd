"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function snapToGrid(x, y) {
    var snappedX = Math.round(x / 32) * 32;
    var snappedY = Math.round(y / 32) * 32;
    return [snappedX, snappedY];
}
exports.default = snapToGrid;
