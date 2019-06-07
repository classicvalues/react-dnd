import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface DustbinProps {
    greedy?: boolean;
    isOver: boolean;
    isOverCurrent: boolean;
    connectDropTarget: ConnectDropTarget;
}
export interface DustbinState {
    hasDropped: boolean;
    hasDroppedOnChild: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.ForwardRefExoticComponent<DustbinProps & React.RefAttributes<HTMLDivElement>>, Pick<DustbinProps & React.RefAttributes<HTMLDivElement>, "ref" | "key" | "greedy">>;
export default _default;
