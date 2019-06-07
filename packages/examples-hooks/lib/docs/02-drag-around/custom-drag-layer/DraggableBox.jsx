import React, { useEffect } from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__, } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { getEmptyImage } from 'react-dnd-html5-backend';
import Box from './Box';
const { useDrag, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
function getStyles(left, top, isDragging) {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
    };
}
const DraggableBox = props => {
    const { id, title, left, top } = props;
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ItemTypes.BOX, id, left, top },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);
    return (<div ref={drag} style={getStyles(left, top, isDragging)}>
			<Box title={title}/>
		</div>);
};
export default DraggableBox;
