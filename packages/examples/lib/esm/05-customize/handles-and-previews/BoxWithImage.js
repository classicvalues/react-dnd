import React from 'react';
import { DragSource, DragPreviewImage, } from 'react-dnd';
import ItemTypes from './ItemTypes';
import boxImage from './boxImage';
const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
    width: '20rem',
};
const BoxWithImage = ({ isDragging, connectDragSource, connectDragPreview, }) => {
    const opacity = isDragging ? 0.4 : 1;
    return (React.createElement(React.Fragment, null,
        React.createElement(DragPreviewImage, { connect: connectDragPreview, src: boxImage }),
        React.createElement("div", { ref: connectDragSource, style: Object.assign({}, style, { opacity }) }, "Drag me to see an image"),
        ","));
};
export default DragSource(ItemTypes.BOX, {
    beginDrag: () => ({}),
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}))(BoxWithImage);
