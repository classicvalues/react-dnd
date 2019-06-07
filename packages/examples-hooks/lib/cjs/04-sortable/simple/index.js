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
var Card_1 = __importDefault(require("./Card"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var style = {
    width: 400,
};
var Container = function () {
    {
        var _a = react_1.useState([
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
                text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 6,
                text: '???',
            },
            {
                id: 7,
                text: 'PROFIT',
            },
        ]), cards_1 = _a[0], setCards_1 = _a[1];
        var moveCard_1 = react_1.useCallback(function (dragIndex, hoverIndex) {
            var dragCard = cards_1[dragIndex];
            setCards_1(immutability_helper_1.default(cards_1, {
                $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
            }));
        }, [cards_1]);
        var renderCard_1 = function (card, index) {
            return (react_1.default.createElement(Card_1.default, { key: card.id, index: index, id: card.id, text: card.text, moveCard: moveCard_1 }));
        };
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("h1", null, "EXPERIMENTAL API"),
            react_1.default.createElement("div", { style: style }, cards_1.map(function (card, i) { return renderCard_1(card, i); }))));
    }
};
exports.default = Container;
