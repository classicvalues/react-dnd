"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestBackend_1 = require("./TestBackend");
function createBackend(manager) {
    return new TestBackend_1.default(manager);
}
exports.default = createBackend;
