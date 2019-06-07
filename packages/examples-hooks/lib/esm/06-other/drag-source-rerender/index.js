import React from 'react';
import Example from './Example';
const Container = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "EXPERIMENTAL API"),
        React.createElement("h3", null, "Drag the box before hiding then hide it and show it again and try again."),
        React.createElement("h5", null, "Note: this is more of a test-case then a usage demo. It will go away in the future."),
        React.createElement(Example, null)));
};
export default Container;
