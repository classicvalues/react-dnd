import React from 'react';
import { DragPreviewImage, __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__, } from 'react-dnd';
import ItemTypes from './ItemTypes';
import knightImage from './knightImage';
const { useDrag, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const knightStyle = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
};
export const Knight = () => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: mon => ({
            isDragging: !!mon.isDragging(),
        }),
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(DragPreviewImage, { connect: preview, src: knightImage }),
        React.createElement("div", { ref: drag, style: Object.assign({}, knightStyle, { opacity: isDragging ? 0.5 : 1 }) }, "\u2658")));
};
