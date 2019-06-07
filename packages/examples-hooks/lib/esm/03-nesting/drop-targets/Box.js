import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd';
import ItemTypes from './ItemTypes';
const { useDrag, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const style = {
    display: 'inline-block',
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    cursor: 'move',
};
const Box = () => {
    const [, drag] = useDrag({ item: { type: ItemTypes.BOX } });
    return (React.createElement("div", { ref: drag, style: style }, "Drag me"));
};
export default Box;
