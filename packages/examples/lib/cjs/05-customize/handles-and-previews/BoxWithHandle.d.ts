import React from 'react';
import { ConnectDragPreview, ConnectDragSource } from 'react-dnd';
export interface BoxWithHandleProps {
    connectDragSource: ConnectDragSource;
    connectDragPreview: ConnectDragPreview;
    isDragging: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<BoxWithHandleProps>, Pick<BoxWithHandleProps, never>>;
export default _default;
