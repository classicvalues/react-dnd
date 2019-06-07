import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd';
import { Square } from './Square';
import { canMoveKnight, moveKnight } from './Game';
import ItemTypes from './ItemTypes';
import Overlay from './Overlay';
const { useDrop, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
export const BoardSquare = ({ x, y, children, }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: mon => ({
            isOver: !!mon.isOver(),
            canDrop: !!mon.canDrop(),
        }),
    });
    const black = (x + y) % 2 === 1;
    return (React.createElement("div", { ref: drop, style: {
            position: 'relative',
            width: '100%',
            height: '100%',
        } },
        React.createElement(Square, { black: black }, children),
        isOver && !canDrop && React.createElement(Overlay, { color: "red" }),
        !isOver && canDrop && React.createElement(Overlay, { color: "yellow" }),
        isOver && canDrop && React.createElement(Overlay, { color: "green" })));
};
