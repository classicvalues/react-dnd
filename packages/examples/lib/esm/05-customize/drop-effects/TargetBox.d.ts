import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface TargetBoxProps {
    connectDropTarget: ConnectDropTarget;
    isOver: boolean;
    canDrop: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<TargetBoxProps>, Pick<TargetBoxProps, never>>;
export default _default;
