import React from 'react';
export interface BoxProps {
    name: string;
    type: string;
    isDropped: boolean;
}
declare const Box: React.FC<BoxProps>;
export default Box;
