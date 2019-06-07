import React from 'react';
import { ConnectDropTarget, DropTargetMonitor } from 'react-dnd';
export interface TargetBoxProps {
    accepts: string[];
    onDrop: (props: TargetBoxProps, monitor: DropTargetMonitor) => void;
    isOver: boolean;
    canDrop: boolean;
    connectDropTarget: ConnectDropTarget;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<TargetBoxProps>, Pick<TargetBoxProps, "accepts" | "onDrop">>;
export default _default;
