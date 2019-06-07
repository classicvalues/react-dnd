"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var Card_1 = __importDefault(require("./Card"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var ItemTypes_1 = __importDefault(require("./ItemTypes"));
var useDrop = react_dnd_1.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__.useDrop;
var style = {
    width: 400,
};
var ITEMS = [
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
];
var Container = function () {
    var _a = react_1.default.useState(ITEMS), cards = _a[0], setCards = _a[1];
    var moveCard = function (id, atIndex) {
        var _a = findCard(id), card = _a.card, index = _a.index;
        setCards(immutability_helper_1.default(cards, {
            $splice: [[index, 1], [atIndex, 0, card]],
        }));
    };
    var findCard = function (id) {
        var card = cards.filter(function (c) { return "" + c.id === id; })[0];
        return {
            card: card,
            index: cards.indexOf(card),
        };
    };
    var _b = useDrop({ accept: ItemTypes_1.default.CARD }), drop = _b[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "EXPERIMENTAL API"),
        react_1.default.createElement("div", { ref: drop, style: style }, cards.map(function (card) { return (react_1.default.createElement(Card_1.default, { key: card.id, id: "" + card.id, text: card.text, moveCard: moveCard, findCard: findCard })); }))));
};
exports.default = Container;
