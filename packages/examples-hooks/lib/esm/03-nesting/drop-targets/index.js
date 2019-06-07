import React from 'react';
import Dustbin from './Dustbin';
import Box from './Box';
const Container = () => (React.createElement("div", null,
    React.createElement("h1", null, "EXPERIMENTAL API"),
    React.createElement("div", { style: { overflow: 'hidden', clear: 'both', margin: '-1rem' } },
        React.createElement(Dustbin, { greedy: true },
            React.createElement(Dustbin, { greedy: true },
                React.createElement(Dustbin, { greedy: true }))),
        React.createElement(Dustbin, null,
            React.createElement(Dustbin, null,
                React.createElement(Dustbin, null)))),
    React.createElement("div", { style: { overflow: 'hidden', clear: 'both', marginTop: '1.5rem' } },
        React.createElement(Box, null))));
export default Container;
