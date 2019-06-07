import React, { useCallback, useState } from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd';
import ItemTypes from './ItemTypes';
import DraggableBox from './DraggableBox';
import doSnapToGrid from './snapToGrid';
import update from 'immutability-helper';
const { useDrop, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const styles = {
    width: 300,
    height: 300,
    border: '1px solid black',
    position: 'relative',
};
function renderBox(item, key) {
    return React.createElement(DraggableBox, Object.assign({ key: key, id: key }, item));
}
const Container = ({ snapToGrid }) => {
    const [boxes, setBoxes] = useState({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
    });
    const moveBox = useCallback((id, left, top) => {
        setBoxes(update(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [boxes]);
    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let left = Math.round(item.left + delta.x);
            let top = Math.round(item.top + delta.y);
            if (snapToGrid) {
                ;
                [left, top] = doSnapToGrid(left, top);
            }
            moveBox(item.id, left, top);
            return undefined;
        },
    });
    return (React.createElement("div", { ref: drop, style: styles }, Object.keys(boxes).map(key => renderBox(boxes[key], key))));
};
export default Container;
