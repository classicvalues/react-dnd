import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface DustbinProps {
    lastDroppedItem?: any;
    accepts: string[];
    onDrop: (arg: any) => void;
    connectDropTarget: ConnectDropTarget;
    isOver: boolean;
    canDrop: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<DustbinProps>, Pick<DustbinProps, "accepts" | "onDrop" | "lastDroppedItem">>;
export default _default;
