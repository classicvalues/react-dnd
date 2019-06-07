import React from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__, } from 'react-dnd';
const { useDrop, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
const TargetBox = props => {
    const { onDrop } = props;
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: [NativeTypes.FILE],
        drop(item, monitor) {
            if (onDrop) {
                onDrop(props, monitor);
            }
        },
        collect: monitor => ({
            isOver: monitor.isOver,
            canDrop: monitor.canDrop,
        }),
    });
    const isActive = canDrop && isOver;
    return (React.createElement("div", { ref: drop, style: style }, isActive ? 'Release to drop' : 'Drag file here'));
};
export default TargetBox;
