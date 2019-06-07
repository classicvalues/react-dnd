// tslint:disable max-classes-per-file
import React, { useState, useCallback } from 'react';
import { DropTarget } from 'react-dnd';
import Colors from './Colors';
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
const TargetBoxRaw = ({ canDrop, isOver, draggingColor, lastDroppedColor, connectDropTarget, }) => {
    const opacity = isOver ? 1 : 0.7;
    let backgroundColor = '#fff';
    switch (draggingColor) {
        case Colors.BLUE:
            backgroundColor = 'lightblue';
            break;
        case Colors.YELLOW:
            backgroundColor = 'lightgoldenrodyellow';
            break;
        default:
            break;
    }
    return connectDropTarget(React.createElement("div", { style: Object.assign({}, style, { backgroundColor, opacity }) },
        React.createElement("p", null, "Drop here."),
        !canDrop && lastDroppedColor && React.createElement("p", null,
            "Last dropped: ",
            lastDroppedColor)));
};
const TargetBox = DropTarget([Colors.YELLOW, Colors.BLUE], {
    drop(props, monitor) {
        props.onDrop(monitor.getItemType());
    },
}, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    draggingColor: monitor.getItemType(),
}))(TargetBoxRaw);
const StatefulTargetBox = props => {
    const [lastDroppedColor, setLastDroppedColor] = useState(null);
    const handleDrop = useCallback((color) => setLastDroppedColor(color), []);
    return (React.createElement(TargetBox, Object.assign({}, props, { lastDroppedColor: lastDroppedColor, onDrop: handleDrop })));
};
export default StatefulTargetBox;
