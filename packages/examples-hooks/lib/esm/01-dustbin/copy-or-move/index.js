import React from 'react';
import Dustbin from './Dustbin';
import Box from './Box';
const Container = () => (React.createElement("div", null,
    React.createElement("h1", null, "EXPERIMENTAL API"),
    React.createElement("div", { style: { overflow: 'hidden', clear: 'both' } },
        React.createElement(Dustbin, { allowedDropEffect: "any" }),
        React.createElement(Dustbin, { allowedDropEffect: "copy" }),
        React.createElement(Dustbin, { allowedDropEffect: "move" })),
    React.createElement("div", { style: { overflow: 'hidden', clear: 'both' } },
        React.createElement(Box, { name: "Glass" }),
        React.createElement(Box, { name: "Banana" }),
        React.createElement(Box, { name: "Paper" }))));
export default Container;
