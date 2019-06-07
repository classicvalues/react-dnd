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
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var Dustbin_1 = __importDefault(require("./Dustbin"));
var Box_1 = __importDefault(require("./Box"));
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var shuffle = require('lodash/shuffle');
var Container = function () {
    var _a = react_1.useState([
        { accepts: [ItemTypes_1.default.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes_1.default.FOOD], lastDroppedItem: null },
        {
            accepts: [ItemTypes_1.default.PAPER, ItemTypes_1.default.GLASS, react_dnd_html5_backend_1.NativeTypes.URL],
            lastDroppedItem: null,
        },
        { accepts: [ItemTypes_1.default.PAPER, react_dnd_html5_backend_1.NativeTypes.FILE], lastDroppedItem: null },
    ]), dustbins = _a[0], setDustbins = _a[1];
    var _b = react_1.useState([
        { name: 'Bottle', type: ItemTypes_1.default.GLASS },
        { name: 'Banana', type: ItemTypes_1.default.FOOD },
        { name: 'Magazine', type: ItemTypes_1.default.PAPER },
    ]), boxes = _b[0], setBoxes = _b[1];
    var _c = react_1.useState([]), droppedBoxNames = _c[0], setDroppedBoxNames = _c[1];
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setBoxes(shuffle(boxes));
            setDustbins(shuffle(dustbins));
        }, 1000);
        return function () { return clearInterval(interval); };
    });
    var isDropped = function (boxName) { return droppedBoxNames.indexOf(boxName) > -1; };
    var handleDrop = react_1.useCallback(function (index, item) {
        var _a;
        var name = item.name;
        setDustbins(immutability_helper_1.default(dustbins, (_a = {},
            _a[index] = {
                lastDroppedItem: {
                    $set: item,
                },
            },
            _a)));
        setDroppedBoxNames(immutability_helper_1.default(droppedBoxNames, name
            ? {
                $push: [name],
            }
            : {}));
    }, [dustbins, droppedBoxNames]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: { overflow: 'hidden', clear: 'both' } }, dustbins.map(function (_a, index) {
            var accepts = _a.accepts, lastDroppedItem = _a.lastDroppedItem;
            return (react_1.default.createElement(Dustbin_1.default, { accepts: accepts, lastDroppedItem: lastDroppedItem, onDrop: function (item) { return handleDrop(index, item); }, key: index }));
        })),
        react_1.default.createElement("div", { style: { overflow: 'hidden', clear: 'both' } }, boxes.map(function (_a, index) {
            var name = _a.name, type = _a.type;
            return (react_1.default.createElement(Box_1.default, { name: name, type: type, isDropped: isDropped(name), key: index }));
        }))));
};
exports.default = Container;
