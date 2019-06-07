import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd';
const { useDrop, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
const Dustbin = ({ accept, lastDroppedItem, onDrop, }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    return (React.createElement("div", { ref: drop, style: Object.assign({}, style, { backgroundColor }) },
        isActive
            ? 'Release to drop'
            : `This dustbin accepts: ${accept.join(', ')}`,
        lastDroppedItem && (React.createElement("p", null,
            "Last dropped: ",
            JSON.stringify(lastDroppedItem)))));
};
export default Dustbin;
