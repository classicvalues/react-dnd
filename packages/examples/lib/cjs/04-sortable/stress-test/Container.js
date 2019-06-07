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
var faker_1 = require("faker");
var Card_1 = __importDefault(require("./Card"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var style = {
    width: 400,
};
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        var _this = _super.call(this, props) || this;
        _this.drawFrame = function () {
            var nextState = immutability_helper_1.default(_this.state, _this.pendingUpdateFn);
            _this.setState(nextState);
            _this.pendingUpdateFn = undefined;
            _this.requestedFrame = undefined;
        };
        _this.moveCard = function (id, afterId) {
            var _a = _this.state, cardsById = _a.cardsById, cardsByIndex = _a.cardsByIndex;
            var card = cardsById[id];
            var afterCard = cardsById[afterId];
            var cardIndex = cardsByIndex.indexOf(card);
            var afterIndex = cardsByIndex.indexOf(afterCard);
            _this.scheduleUpdate({
                cardsByIndex: {
                    $splice: [[cardIndex, 1], [afterIndex, 0, card]],
                },
            });
        };
        var cardsById = {};
        var cardsByIndex = [];
        for (var i = 0; i < 1000; i += 1) {
            var card = { id: i, text: faker_1.name.findName() };
            cardsById[card.id] = card;
            cardsByIndex[i] = card;
        }
        _this.state = {
            cardsById: cardsById,
            cardsByIndex: cardsByIndex,
        };
        return _this;
    }
    Container.prototype.componentWillUnmount = function () {
        if (this.requestedFrame !== undefined) {
            cancelAnimationFrame(this.requestedFrame);
        }
    };
    Container.prototype.render = function () {
        var _this = this;
        var cardsByIndex = this.state.cardsByIndex;
        return (react_1.default.createElement("div", { style: style }, cardsByIndex.map(function (card) { return (react_1.default.createElement(Card_1.default, { key: card.id, id: card.id, text: card.text, moveCard: _this.moveCard })); })));
    };
    // tslint:disable-next-line ban-types
    Container.prototype.scheduleUpdate = function (updateFn) {
        this.pendingUpdateFn = updateFn;
        if (!this.requestedFrame) {
            this.requestedFrame = requestAnimationFrame(this.drawFrame);
        }
    };
    return Container;
}(react_1.default.Component));
exports.default = Container;
