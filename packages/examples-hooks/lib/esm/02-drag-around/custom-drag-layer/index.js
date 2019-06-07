import React, { useState } from 'react';
import Container from './Container';
import CustomDragLayer from './CustomDragLayer';
const DragAroundCustomDragLayer = () => {
    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false);
    const handleSnapToGridAfterDropChange = React.useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);
    const handleSnapToGridWhileDraggingChange = React.useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);
    return (React.createElement("div", null,
        React.createElement("h1", null, "EXPERIMENTAL API"),
        React.createElement(Container, { snapToGrid: snapToGridAfterDrop }),
        React.createElement(CustomDragLayer, { snapToGrid: snapToGridWhileDragging }),
        React.createElement("p", null,
            React.createElement("label", { htmlFor: "snapToGridWhileDragging" },
                React.createElement("input", { id: "snapToGridWhileDragging", type: "checkbox", checked: snapToGridWhileDragging, onChange: handleSnapToGridWhileDraggingChange }),
                React.createElement("small", null, "Snap to grid while dragging")),
            React.createElement("br", null),
            React.createElement("label", { htmlFor: "snapToGridAfterDrop" },
                React.createElement("input", { id: "snapToGridAfterDrop", type: "checkbox", checked: snapToGridAfterDrop, onChange: handleSnapToGridAfterDropChange }),
                React.createElement("small", null, "Snap to grid after drop")))));
};
export default DragAroundCustomDragLayer;
