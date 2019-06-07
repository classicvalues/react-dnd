import React from 'react';
export interface DustbinProps {
    greedy?: boolean;
}
export interface DustbinState {
    hasDropped: boolean;
    hasDroppedOnChild: boolean;
}
declare const Dustbin: React.FC<DustbinProps>;
export default Dustbin;
