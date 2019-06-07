import React from 'react';
import { DragDropContextProvider, } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
const { default: Frame, FrameContextConsumer, } = require('react-frame-component');
const FrameBindingContext = ({ children }) => (React.createElement(FrameContextConsumer, null, ({ window }) => (React.createElement(DragDropContextProvider, { backend: HTML5Backend, context: window }, children))));
// Don't use the decorator, embed the DnD context within the iframe
// tslint:disable-next-line max-classes-per-file
export default function Container() {
    // The react-frame-component will pass the iframe's 'window' global as a context value
    // to the DragDropContext provider. You could also directly inject it in via a prop.
    // If neither the prop or the context value for 'window' are present, the DragDropContextProvider
    // will just use the global window.
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "EXPERIMENTAL API"),
        React.createElement(Frame, { style: { width: '100%', height: 400 } },
            React.createElement(FrameBindingContext, null,
                React.createElement("div", null,
                    React.createElement("div", { style: { overflow: 'hidden', clear: 'both' } },
                        React.createElement(Dustbin, null)),
                    React.createElement("div", { style: { overflow: 'hidden', clear: 'both' } },
                        React.createElement(Box, { name: "Glass" }),
                        React.createElement(Box, { name: "Banana" }),
                        React.createElement(Box, { name: "Paper" })))))));
}
