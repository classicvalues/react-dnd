import React from 'react';
import { ConnectDragSource } from 'react-dnd';
export interface BoxProps {
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
    name: string;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<BoxProps>, Pick<BoxProps, "name">>;
export default _default;
