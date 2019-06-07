import React from 'react';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';
import Colors from './Colors';
const Container = () => (React.createElement("div", { style: { overflow: 'hidden', clear: 'both', margin: '-.5rem' } },
    React.createElement("div", { style: { float: 'left' } },
        React.createElement(SourceBox, { color: Colors.BLUE },
            React.createElement(SourceBox, { color: Colors.YELLOW },
                React.createElement(SourceBox, { color: Colors.YELLOW }),
                React.createElement(SourceBox, { color: Colors.BLUE })),
            React.createElement(SourceBox, { color: Colors.BLUE },
                React.createElement(SourceBox, { color: Colors.YELLOW })))),
    React.createElement("div", { style: { float: 'left', marginLeft: '5rem', marginTop: '.5rem' } },
        React.createElement(TargetBox, null))));
export default Container;
