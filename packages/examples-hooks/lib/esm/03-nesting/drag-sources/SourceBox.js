// tslint:disable max-classes-per-file jsx-no-lambda
import React, { useState, useCallback, useMemo } from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__, } from 'react-dnd';
import Colors from './Colors';
const { useDrag, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const style = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
};
const SourceBox = ({ color, children }) => {
    const [forbidDrag, setForbidDrag] = useState(false);
    const [{ isDragging }, drag] = useDrag({
        item: { type: `${color}` },
        canDrag: !forbidDrag,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const onToggleForbidDrag = useCallback(() => {
        setForbidDrag(!forbidDrag);
    }, [forbidDrag]);
    const backgroundColor = useMemo(() => {
        switch (color) {
            case Colors.YELLOW:
                return 'lightgoldenrodyellow';
            case Colors.BLUE:
                return 'lightblue';
            default:
                return 'lightgoldenrodyellow';
        }
    }, [color]);
    const containerStyle = useMemo(() => (Object.assign({}, style, { backgroundColor, opacity: isDragging ? 0.4 : 1, cursor: forbidDrag ? 'default' : 'move' })), [isDragging, forbidDrag, backgroundColor]);
    return (React.createElement("div", { ref: drag, style: containerStyle },
        React.createElement("input", { type: "checkbox", checked: forbidDrag, onChange: onToggleForbidDrag }),
        React.createElement("small", null, "Forbid drag"),
        children));
};
export default SourceBox;
