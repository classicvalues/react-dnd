import React from 'react';
import { ConnectDragSource } from 'react-dnd';
export interface BoxProps {
    name: string;
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<BoxProps>, Pick<BoxProps, "name">>;
export default _default;
