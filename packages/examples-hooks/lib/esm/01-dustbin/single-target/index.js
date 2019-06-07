import React from 'react';
import Dustbin from './Dustbin';
import Box from './Box';
export default function Container() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "EXPERIMENTAL API"),
        React.createElement("div", { style: { overflow: 'hidden', clear: 'both' } },
            React.createElement(Dustbin, null)),
        React.createElement("div", { style: { overflow: 'hidden', clear: 'both' } },
            React.createElement(Box, { name: "Glass" }),
            React.createElement(Box, { name: "Banana" }),
            React.createElement(Box, { name: "Paper" }))));
}
