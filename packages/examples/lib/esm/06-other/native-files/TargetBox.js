import React from 'react';
import { DropTarget, } from 'react-dnd';
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
const TargetBox = ({ canDrop, isOver, connectDropTarget, }) => {
    const isActive = canDrop && isOver;
    return connectDropTarget(React.createElement("div", { style: style }, isActive ? 'Release to drop' : 'Drag file here'));
};
export default DropTarget((props) => props.accepts, {
    drop(props, monitor) {
        if (props.onDrop) {
            props.onDrop(props, monitor);
        }
    },
}, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(TargetBox);
