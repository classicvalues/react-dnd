import React from 'react';
import Container from './Container';
export default function DragAroundNaive() {
    const [hideSourceOnDrag, setHideSourceOnDrag] = React.useState(true);
    const toggle = React.useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [hideSourceOnDrag]);
    return (React.createElement("div", null,
        React.createElement("h1", null, "EXPERIMENTAL API"),
        React.createElement(Container, { hideSourceOnDrag: hideSourceOnDrag }),
        React.createElement("p", null,
            React.createElement("label", { htmlFor: "hideSourceOnDrag" },
                React.createElement("input", { id: "hideSourceOnDrag", type: "checkbox", checked: hideSourceOnDrag, onChange: toggle }),
                React.createElement("small", null, "Hide the source item while dragging")))));
}
