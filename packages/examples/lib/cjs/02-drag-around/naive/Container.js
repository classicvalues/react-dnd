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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var Box_1 = __importDefault(require("./Box"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
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
        var _a = this.props, hideSourceOnDrag = _a.hideSourceOnDrag, connectDropTarget = _a.connectDropTarget;
        var boxes = this.state.boxes;
        return connectDropTarget(react_1.default.createElement("div", { style: styles }, Object.keys(boxes).map(function (key) {
            var _a = boxes[key], left = _a.left, top = _a.top, title = _a.title;
            return (react_1.default.createElement(Box_1.default, { key: key, id: key, left: left, top: top, hideSourceOnDrag: hideSourceOnDrag }, title));
        })));
    };
    Container.prototype.moveBox = function (id, left, top) {
        var _a;
        this.setState(immutability_helper_1.default(this.state, {
            boxes: (_a = {},
                _a[id] = {
                    $merge: { left: left, top: top },
                },
                _a),
        }));
    };
    return Container;
}(react_1.default.Component));
exports.default = react_dnd_1.DropTarget(ItemTypes_1.default.BOX, {
    drop: function (props, monitor, component) {
        if (!component) {
            return;
        }
        var item = monitor.getItem();
        var delta = monitor.getDifferenceFromInitialOffset();
        var left = Math.round(item.left + delta.x);
        var top = Math.round(item.top + delta.y);
        component.moveBox(item.id, left, top);
    },
}, function (connect) { return ({
    connectDropTarget: connect.dropTarget(),
}); })(Container);
