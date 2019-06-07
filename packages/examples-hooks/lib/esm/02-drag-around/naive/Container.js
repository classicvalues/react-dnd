import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__, } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Box from './Box';
import update from 'immutability-helper';
const { useDrop, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const styles = {
    width: 300,
    height: 300,
    border: '1px solid black',
    position: 'relative',
};
const Container = ({ hideSourceOnDrag }) => {
    const [boxes, setBoxes] = React.useState({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
    });
    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top);
            return undefined;
        },
    });
    const moveBox = (id, left, top) => {
        setBoxes(update(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    };
    return (React.createElement("div", { ref: drop, style: styles }, Object.keys(boxes).map(key => {
        const { left, top, title } = boxes[key];
        return (React.createElement(Box, { key: key, id: key, left: left, top: top, hideSourceOnDrag: hideSourceOnDrag }, title));
    })));
};
export default Container;
