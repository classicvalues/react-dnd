import React from 'react';
import { DragSource } from 'react-dnd';
const Parent = ({ isDragging, connectDragSource }) => {
    return (React.createElement(Child, { connect: connectDragSource }, isDragging ? 'Dragging' : 'Drag me'));
};
const Example = DragSource('KNIGHT', {
    beginDrag: () => ({}),
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))(Parent);
export default Example;
const Child = ({ connect, children }) => {
    const [open, setOpen] = React.useState(true);
    const toggle = React.useCallback(() => setOpen(!open), [open]);
    return (React.createElement("div", { style: {
            padding: 16,
            width: 400,
        } },
        React.createElement("button", { onClick: toggle }, open ? 'Hide' : 'Show'),
        open ? (React.createElement("div", { ref: node => connect(node), style: {
                padding: 32,
                marginTop: 16,
                background: '#eee',
            } }, children)) : null));
};
