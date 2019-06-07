import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface DustbinProps {
    canDrop: boolean;
    isOver: boolean;
    connectDropTarget: ConnectDropTarget;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<DustbinProps>, Pick<DustbinProps, never>>;
export default _default;
