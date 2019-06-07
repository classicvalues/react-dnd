import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface DustbinProps {
    allowedDropEffect: string;
    connectDropTarget: ConnectDropTarget;
    canDrop: boolean;
    isOver: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<DustbinProps>, Pick<DustbinProps, "allowedDropEffect">>;
export default _default;
