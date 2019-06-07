import React from 'react';
import BoxWithImage from './BoxWithImage';
import BoxWithHandle from './BoxWithHandle';
const Container = () => (React.createElement("div", null,
    React.createElement("div", { style: { marginTop: '1.5rem' } },
        React.createElement(BoxWithHandle, null),
        React.createElement(BoxWithImage, null))));
export default Container;
