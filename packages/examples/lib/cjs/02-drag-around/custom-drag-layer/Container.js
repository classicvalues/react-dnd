"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var DraggableBox_1 = __importDefault(require("./DraggableBox"));
var snapToGrid_1 = __importDefault(require("./snapToGrid"));
var update = require('immutability-helper');
var styles = {
    width: 300,
    height: 300,
    border: '1px solid black',
    position: 'relative',
};
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            boxes: {
                a: { top: 20, left: 80, title: 'Drag me around' },
                b: { top: 180, left: 20, title: 'Drag me too' },
            },
        };
        return _this;
    }
    Container.prototype.render = function () {
        var _this = this;
        var connectDropTarget = this.props.connectDropTarget;
        var boxes = this.state.boxes;
        return connectDropTarget(react_1.default.createElement("div", { style: styles }, Object.keys(boxes).map(function (key) { return _this.renderBox(boxes[key], key); })));
    };
    Container.prototype.moveBox = function (id, left, top) {
        var _a;
        this.setState(update(this.state, {
            boxes: (_a = {},
                _a[id] = {
                    $merge: { left: left, top: top },
                },
                _a),
        }));
    };
    Container.prototype.renderBox = function (item, key) {
        return react_1.default.createElement(DraggableBox_1.default, __assign({ key: key, id: key }, item));
    };
    return Container;
}(react_1.default.PureComponent));
exports.default = react_dnd_1.DropTarget(ItemTypes_1.default.BOX, {
    drop: function (props, monitor, component) {
        var _a;
        if (!component) {
            return;
        }
        var delta = monitor.getDifferenceFromInitialOffset();
        var item = monitor.getItem();
        var left = Math.round(item.left + delta.x);
        var top = Math.round(item.top + delta.y);
        if (props.snapToGrid) {
            ;
            _a = snapToGrid_1.default(left, top), left = _a[0], top = _a[1];
        }
        component.moveBox(item.id, left, top);
    },
}, function (connect) { return ({
    connectDropTarget: connect.dropTarget(),
}); })(Container);
