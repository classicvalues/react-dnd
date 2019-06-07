import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd';
const { useDrag, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
const Box = ({ name, type, isDropped }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type },
        isDragging(monitor) {
            const item = monitor.getItem();
            return name === item.name;
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0.4 : 1;
    return (<div ref={drag} style={Object.assign({}, style, { opacity })}>
			{isDropped ? <s>{name}</s> : name}
		</div>);
};
export default Box;
