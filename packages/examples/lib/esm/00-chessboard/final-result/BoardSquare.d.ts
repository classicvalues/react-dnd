import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface BoardSquareProps {
    x: number;
    y: number;
    children: any;
    isOver: boolean;
    canDrop: boolean;
    connectDropTarget: ConnectDropTarget;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<BoardSquareProps>, Pick<BoardSquareProps, "children" | "x" | "y">>;
export default _default;
