import React from 'react';
export interface DustbinProps {
    accept: string[];
    lastDroppedItem?: any;
    onDrop: (item: any) => void;
}
declare const Dustbin: React.FC<DustbinProps>;
export default Dustbin;
