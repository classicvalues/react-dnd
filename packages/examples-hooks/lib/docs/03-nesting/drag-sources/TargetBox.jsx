// tslint:disable max-classes-per-file
import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ } from 'react-dnd';
import Colors from './Colors';
const { useDrop, } = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
const TargetBox = ({ onDrop, lastDroppedColor }) => {
    const [{ isOver, draggingColor, canDrop }, drop] = useDrop({
        accept: [Colors.YELLOW, Colors.BLUE],
        drop(item) {
            onDrop(item.type);
            return undefined;
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }),
    });
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
    return (<div ref={drop} style={Object.assign({}, style, { backgroundColor, opacity })}>
			<p>Drop here.</p>

			{!canDrop && lastDroppedColor && <p>Last dropped: {lastDroppedColor}</p>}
		</div>);
};
const StatefulTargetBox = props => {
    const [lastDroppedColor, setLastDroppedColor] = React.useState(null);
    const handleDrop = React.useCallback((color) => setLastDroppedColor(color), []);
    return (<TargetBox {...props} lastDroppedColor={lastDroppedColor} onDrop={handleDrop}/>);
};
export default StatefulTargetBox;
