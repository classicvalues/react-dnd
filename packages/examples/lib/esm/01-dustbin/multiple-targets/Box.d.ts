import React from 'react';
import { ConnectDragSource } from 'react-dnd';
export interface BoxProps {
    name: string;
    type: string;
    isDropped: boolean;
    connectDragSource: ConnectDragSource;
    isDragging: boolean;
}
export declare const Box: React.FC<BoxProps>;
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<BoxProps>, Pick<BoxProps, "type" | "name" | "isDropped">>;
export default _default;
