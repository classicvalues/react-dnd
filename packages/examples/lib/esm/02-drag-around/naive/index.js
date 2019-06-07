import React, { useState, useCallback } from 'react';
import Container from './Container';
const DragAroundNaive = () => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
    const handleHideSourceClick = useCallback(() => {
        setHideSourceOnDrag(!hideSourceOnDrag);
    }, [hideSourceOnDrag]);
    return (React.createElement("div", null,
        React.createElement(Container, { hideSourceOnDrag: hideSourceOnDrag }),
        React.createElement("p", null,
            React.createElement("label", { htmlFor: "hideSourceOnDrag" },
                React.createElement("input", { id: "hideSourceOnDrag", type: "checkbox", checked: hideSourceOnDrag, onChange: handleHideSourceClick }),
                React.createElement("small", null, "Hide the source item while dragging")))));
};
export default DragAroundNaive;
