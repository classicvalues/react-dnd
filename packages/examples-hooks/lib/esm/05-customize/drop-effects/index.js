import React from 'react';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';
export default function Container() {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "EXPERIMENTAL API"),
        React.createElement("div", { style: { overflow: 'hidden', clear: 'both', marginTop: '1.5rem' } },
            React.createElement("div", { style: { float: 'left' } },
                React.createElement(SourceBox, { showCopyIcon: true }),
                React.createElement(SourceBox, null)),
            React.createElement("div", { style: { float: 'left' } },
                React.createElement(TargetBox, null)))));
}
