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
var react_dnd_1 = require("react-dnd");
var Card_1 = __importDefault(require("./Card"));
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var style = {
    width: 400,
};
var Container = function (_a) {
    var connectDropTarget = _a.connectDropTarget;
    var ref = react_1.useRef(null);
    var _b = react_1.useState([
        {
            id: 1,
            text: 'Write a cool JS library',
        },
        {
            id: 2,
            text: 'Make it generic enough',
        },
        {
            id: 3,
            text: 'Write README',
        },
        {
            id: 4,
            text: 'Create some examples',
        },
        {
            id: 5,
            text: 'Spam in Twitter and IRC to promote it',
        },
        {
            id: 6,
            text: '???',
        },
        {
            id: 7,
            text: 'PROFIT',
        },
    ]), cards = _b[0], setCards = _b[1];
    var moveCard = react_1.useCallback(function (id, atIndex) {
        var _a = findCard(id), card = _a.card, index = _a.index;
        setCards(immutability_helper_1.default(cards, {
            $splice: [[index, 1], [atIndex, 0, card]],
        }));
    }, [cards]);
    var findCard = react_1.useCallback(function (id) {
        var card = cards.filter(function (c) { return "" + c.id === id; })[0];
        return {
            card: card,
            index: cards.indexOf(card),
        };
    }, [cards]);
    connectDropTarget(ref);
    return (react_1.default.createElement("div", { ref: ref, style: style }, cards.map(function (card) { return (react_1.default.createElement(Card_1.default, { key: card.id, id: "" + card.id, text: card.text, moveCard: moveCard, findCard: findCard })); })));
};
exports.default = react_dnd_1.DropTarget(ItemTypes_1.default.CARD, {}, function (connect) { return ({
    connectDropTarget: connect.dropTarget(),
}); })(Container);
