"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knightPosition = [1, 7];
var observers = [];
function emitChange() {
    observers.forEach(function (o) { return o && o(knightPosition); });
}
function observe(o) {
    observers.push(o);
    emitChange();
    return function () {
        observers = observers.filter(function (t) { return t !== o; });
    };
}
exports.observe = observe;
function canMoveKnight(toX, toY) {
    var x = knightPosition[0], y = knightPosition[1];
    var dx = toX - x;
    var dy = toY - y;
    return ((Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2));
}
exports.canMoveKnight = canMoveKnight;
function moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
}
exports.moveKnight = moveKnight;
