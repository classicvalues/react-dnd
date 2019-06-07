import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd';
import ItemTypes from './ItemTypes';
const { useDrag, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const style = {
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    cursor: 'move',
};
const Box = ({ id, left, top, hideSourceOnDrag, children, }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id, left, top, type: ItemTypes.BOX },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>;
    }
    return (<div ref={drag} style={Object.assign({}, style, { left, top })}>
			{children}
		</div>);
};
export default Box;
