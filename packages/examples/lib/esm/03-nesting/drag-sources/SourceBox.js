// tslint:disable max-classes-per-file jsx-no-lambda
import React, { useState, useCallback } from 'react';
import { DragSource, } from 'react-dnd';
import Colors from './Colors';
const style = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
};
const SourceBoxRaw = ({ color, children, isDragging, connectDragSource, forbidDrag, onToggleForbidDrag, }) => {
    const opacity = isDragging ? 0.4 : 1;
    let backgroundColor;
    switch (color) {
        case Colors.YELLOW:
            backgroundColor = 'lightgoldenrodyellow';
            break;
        case Colors.BLUE:
            backgroundColor = 'lightblue';
            break;
        default:
            break;
    }
    return connectDragSource(React.createElement("div", { style: Object.assign({}, style, { backgroundColor,
            opacity, cursor: forbidDrag ? 'default' : 'move' }) },
        React.createElement("input", { type: "checkbox", checked: forbidDrag, onChange: onToggleForbidDrag }),
        React.createElement("small", null, "Forbid drag"),
        children));
};
const SourceBox = DragSource((props) => props.color + '', {
    canDrag: (props) => !props.forbidDrag,
    beginDrag: () => ({}),
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))(SourceBoxRaw);
const StatefulSourceBox = props => {
    const [forbidDrag, setForbidDrag] = useState(false);
    const handleToggleForbidDrag = useCallback(() => {
        setForbidDrag(!forbidDrag);
    }, [forbidDrag]);
    return (React.createElement(SourceBox, Object.assign({}, props, { forbidDrag: forbidDrag, onToggleForbidDrag: () => handleToggleForbidDrag() })));
};
export default StatefulSourceBox;
