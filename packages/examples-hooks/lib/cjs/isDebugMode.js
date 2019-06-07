"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = require("query-string");
function isDebugMode() {
    if (typeof window !== 'undefined') {
        var queryObject = query_string_1.parse(window.location.search);
        return queryObject.debug !== undefined;
    }
    else {
        return false;
    }
}
exports.isDebugMode = isDebugMode;
