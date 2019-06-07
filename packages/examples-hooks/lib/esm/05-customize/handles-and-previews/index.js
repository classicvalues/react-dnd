import React from 'react';
import BoxWithImage from './BoxWithImage';
import BoxWithHandle from './BoxWithHandle';
export default function Container() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "EXPERIMENTAL API"),
        React.createElement("div", { style: { marginTop: '1.5rem' } },
            React.createElement(BoxWithHandle, null),
            React.createElement(BoxWithImage, null))));
}
