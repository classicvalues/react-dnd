import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__, } from 'react-dnd';
const { useDrag, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const Parent = () => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: 'KNIGHT' },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    return React.createElement(Child, { drag: drag }, isDragging ? 'Dragging' : 'Drag me');
};
export default Parent;
const Child = ({ drag, children }) => {
    const [open, setOpen] = React.useState(true);
    const toggle = React.useCallback(() => setOpen(!open), [open]);
    return (React.createElement("div", { style: {
            padding: 16,
            width: 400,
        } },
        React.createElement("button", { onClick: toggle }, open ? 'Hide' : 'Show'),
        open ? (React.createElement("div", { ref: drag, style: {
                padding: 32,
                marginTop: 16,
                background: '#eee',
            } }, children)) : null));
};
