import React from 'react';
import { ConnectDragSource } from 'react-dnd';
export interface BoxProps {
    id: any;
    left: number;
    top: number;
    hideSourceOnDrag?: boolean;
    connectDragSource: ConnectDragSource;
    isDragging?: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<BoxProps>, Pick<BoxProps, "left" | "top" | "id" | "hideSourceOnDrag">>;
export default _default;
