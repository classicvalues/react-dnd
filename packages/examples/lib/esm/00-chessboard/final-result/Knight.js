import React from 'react';
import { DragSource, DragPreviewImage, } from 'react-dnd';
import ItemTypes from './ItemTypes';
import knightImage from './knightImage';
const knightStyle = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
};
const Knight = ({ connectDragSource, connectDragPreview, isDragging, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(DragPreviewImage, { connect: connectDragPreview, src: knightImage }),
        React.createElement("div", { ref: connectDragSource, style: Object.assign({}, knightStyle, { opacity: isDragging ? 0.5 : 1 }) }, "\u2658")));
};
export default DragSource(ItemTypes.KNIGHT, {
    beginDrag: () => ({}),
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}))(Knight);
