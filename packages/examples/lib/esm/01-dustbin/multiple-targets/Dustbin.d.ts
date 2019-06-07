import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface DustbinProps {
    accepts: string[];
    lastDroppedItem?: any;
    onDrop: (item: any) => void;
    canDrop: boolean;
    isOver: boolean;
    connectDropTarget: ConnectDropTarget;
}
export declare const Dustbin: React.FC<DustbinProps>;
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<DustbinProps>, Pick<DustbinProps, "accepts" | "onDrop" | "lastDroppedItem">>;
export default _default;
