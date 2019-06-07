import React from 'react';
export interface DustbinProps {
    lastDroppedItem?: any;
    accepts: string[];
    onDrop: (arg: any) => void;
}
declare const Dustbin: React.FC<DustbinProps>;
export default Dustbin;
