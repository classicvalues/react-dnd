import React from 'react';
import Example from './Example';
const Container = () => {
    return (<>
			<h1>EXPERIMENTAL API</h1>
			<h3>
				Drag the box before hiding then hide it and show it again and try again.
			</h3>
			<h5>
				Note: this is more of a test-case then a usage demo. It will go away in
				the future.
			</h5>
			<Example />
		</>);
};
export default Container;
